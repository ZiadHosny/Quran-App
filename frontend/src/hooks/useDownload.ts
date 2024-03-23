import { useAppDispatch, useAppSelector } from "../store/hooks";
import { DownloadProgress, surahActions } from "../store/surah.store";
import { dismissToast, loadingToast, updateToastSuccess } from "../utils/toast";
import { saveAs } from 'file-saver'
import { SurahType } from "../utils/types";

export const useDownload = () => {
    const { downloadProgress } = useAppSelector(state => state.surah)
    const dispatch = useAppDispatch()

    // add new Download
    const addNewDownload = (downloadProgress: DownloadProgress) => {
        dispatch(surahActions.addNewDownloadProgress(downloadProgress))
    }
    // remove Download
    const removeDownload = (surahId: string) => {
        dispatch(surahActions.removeDownloadProgress(surahId))
    }
    // check Is Download
    const checkDownload = (surahId: string) => {
        return downloadProgress.find((downloadProg) =>
            downloadProg.surahId === surahId)
    }
    // downloadSurahUrl
    const downloadSurah = async ({ surah }:
        { surah: SurahType }) => {
        const downloadedMp3 = `${surah.quranReciter} - ${surah.title}`
        const id = loadingToast(`${downloadedMp3} جاري تحميل`)
        const mp3Url = surah.url

        try {
            const res = await fetch(mp3Url)

            const contentLength = res.headers.get('Content-Length')
            const totalLength = parseInt(contentLength ?? '0')
            const contentLengthInMega = (parseInt(contentLength ?? '0') / (1000 * 1000)).toFixed(2)

            if (!res.body) return;

            const reader = res.body.getReader()
            const chunks = []
            let receivedLength = 0

            while (true) {
                const { done, value } = await reader.read()
                if (done) {
                    removeDownload(surah.id)
                    updateToastSuccess({
                        id,
                        render: `${downloadedMp3} تم تحميل`
                    })
                    console.log('done')
                    break
                }
                receivedLength += value.length

                const step = receivedLength / totalLength * 100
                addNewDownload({ step, surahId: surah.id, totalMb: contentLengthInMega })
                chunks.push(value)
            }

            const blob = new Blob(chunks, { type: 'audio/mp3' })

            saveAs(blob, downloadedMp3, { autoBom: true })
            dismissToast(id)
        }
        catch (e) {
            dismissToast(id)
            saveAs(mp3Url, downloadedMp3, { autoBom: true })
        }
    }

    return {
        downloadSurah,
        downloadProgress,
        checkDownload,
    }
}