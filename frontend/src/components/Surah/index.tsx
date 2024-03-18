import { useEffect, useRef } from 'react'
import { MdLibraryAddCheck } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { useAuth0 } from '@auth0/auth0-react'
import { saveAs } from 'file-saver'
import './surah.scss'
import { SurahType } from '../../utils/types'
import { useSurah } from '../../hooks/useSurah'
import { usePlaylist } from '../../hooks/usePlaylist'
import { addZeros } from '../../utils/addZeros';
import { dismissToast, loadingToast } from '../../utils/toast';

export const Surah = ({ surah }: { surah: SurahType }) => {
    const card = useRef<HTMLInputElement>(null);

    const { addSurahToPlaylist, removeSurahToPlaylist, isInPlaylist: isInPlaylistFn } = usePlaylist()
    const { isAuthenticated, } = useAuth0();
    const { setCurrentSurah, currentSurah, setDownloadProgress, downloadProgress } = useSurah()

    const isCurrentSurah = surah.id === currentSurah.id

    // isInPlaylist
    const isInPlaylist = isInPlaylistFn(surah.id)
    // on click to Surah
    const handleChangeSurah = () => {
        setCurrentSurah(surah)
    }
    // Scroll to current Surah
    useEffect(() => {
        if (isCurrentSurah && card.current) {
            window.scrollTo({ top: card.current.offsetTop, behavior: 'smooth' })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSurah])
    // add to playlist
    const addToPlaylist = async (e: any) => {
        e.stopPropagation()
        await addSurahToPlaylist({ surah })
    }
    // remove from playlist
    const removeFromPlaylist = async (e: any) => {
        e.stopPropagation()
        await removeSurahToPlaylist({ surahId: surah.id })
    }
    // download Surah
    const downloadSurah = async (e: any) => {
        const id = loadingToast()
        const res = await fetch(surah.url)

        const contentLength = res.headers.get('Content-Length')
        const totalLength = parseInt(contentLength ?? '0')

        if (!res.body) return;

        const reader = res.body.getReader()
        const chunks = []
        let receivedLength = 0

        while (true) {
            const { done, value } = await reader.read()
            if (done) {
                setDownloadProgress({ step: 0 })
                console.log('done')
                break
            }
            receivedLength += value.length

            const step = receivedLength / totalLength * 100
            console.log(currentSurah.id)
            setDownloadProgress({ step, surahId: surah.id })
            chunks.push(value)
        }

        const blob = new Blob(chunks, { type: 'audio/mp3' })

        saveAs(blob, `${surah.quranReciter} - ${surah.title}`, { autoBom: true })

        dismissToast(id)
    }

    return (
        <div ref={card}
            className={`surah ${isCurrentSurah ? 'activeSurah' : ''}`}
            onClick={handleChangeSurah}>
            <h3>{addZeros({ number: surah.surahNumber, numOfZeros: 3 })}</h3>
            <div className="authorImage" style={{ backgroundImage: `url(${surah.photo})` }}></div>
            <div className="body">
                <h3 className="arabic-font title">{surah.title}</h3>
                <p className="arabic-font author">{surah.quranReciter}</p>
            </div>
            <div className="option">
                {isAuthenticated ?
                    <>
                        {
                            isInPlaylist ?
                                <MdLibraryAddCheck size={26} onClick={removeFromPlaylist} />
                                :
                                <MdLibraryAdd size={26} onClick={addToPlaylist} />
                        }
                    </>
                    :
                    <></>
                }
                {downloadProgress.surahId === surah.id ?
                    <h3 className='downloadProgress'>
                        %{
                            addZeros({
                                number: Math.trunc(downloadProgress.step),
                                numOfZeros: 2
                            })
                        }
                    </h3>
                    :
                    <FaDownload
                        className='download'
                        size={25}
                        onClick={downloadSurah} />
                }

            </div>
            {surah.surahPlayedCount ?
                <div className='surahPlayedCount'>
                    {surah.surahPlayedCount} views
                </div>
                : <></>
            }
        </div >
    )
}
