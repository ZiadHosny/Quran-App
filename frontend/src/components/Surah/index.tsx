import { useEffect, useRef } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { CgPlayListRemove } from "react-icons/cg";
import { MdDownloadForOffline } from "react-icons/md";
import { useAuth0 } from '@auth0/auth0-react'
import { saveAs } from 'file-saver'
import './surah.scss'
import { SurahType } from '../../utils/types'
import { useSurah } from '../../hooks/useSurah'
import { usePlaylist } from '../../hooks/usePlaylist'
import { addZeros } from '../../utils/addZeros';

export const Surah = ({ surah }: { surah: SurahType }) => {
    const card = useRef<HTMLInputElement>(null);

    const { addSurahToPlaylist, removeSurahToPlaylist, isInPlaylist: isInPlaylistFn } = usePlaylist()
    const { isAuthenticated, } = useAuth0();
    const { setCurrentSurah, currentSurah } = useSurah()

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
        saveAs(surah.url, surah.title, { autoBom: true })
    }

    return (
        <div ref={card}
            style={{ position: 'relative', zIndex: -10 }}
            className={`surah ${isCurrentSurah ? 'activeSurah' : ''}`}
            onClick={handleChangeSurah}>
            <h3 className="title">{addZeros({ number: surah.surahNumber, numOfZeros: 3 })}</h3>
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
                                <CgPlayListRemove size={30} onClick={removeFromPlaylist} />
                                :
                                <IoMdAddCircle size={30} onClick={addToPlaylist} />
                        }
                    </>
                    :
                    <></>
                }
                <MdDownloadForOffline style={{ color: 'green' }} size={30} onClick={downloadSurah} />
            </div>
            <div style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
            }}>
                {surah.surahPlayedCount}
            </div>
        </div >
    )
}
