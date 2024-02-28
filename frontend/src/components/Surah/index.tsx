import { useEffect, useRef } from 'react'
import { SurahType } from '../../utils/types'
import { useSurah } from '../../hooks/useSurah'
import { IoMdAddCircle } from 'react-icons/io'
import { AiFillCheckCircle } from 'react-icons/ai'
// import { useAddSongPlaylist } from '../../hooks/useAddSongPlaylist'
import { useAuth0 } from '@auth0/auth0-react'
import { playListSongsState } from '../../atoms'
// import { useGetUserPlayList } from '../../hooks/useGetUserPlayList'
// import { useRemoveSongFromPlaylist } from '../../hooks/useRemoveSongFromPlaylist'
import './surah.scss'

export const Surah = ({ surah }: { surah: SurahType }) => {

    const { isAuthenticated, } = useAuth0();
    const card = useRef<HTMLInputElement>(null);
    // const { changeSong, currentSong, currentIndex } = useSong()
    const { setCurrentSurah, isCurrentSurah } = useSurah()
    // const [{ value: songAdded }, addSongToPlaylist] = useAddSongPlaylist()
    // const playlist = useRecoilValue(playListSongsState)
    // const [{ }, getPlaylist] = useGetUserPlayList()
    // const [{ value: songDeleted }, removeSong] = useRemoveSongFromPlaylist()

    let inPlayList = false
    let songId: number | undefined = undefined

    // if (playlist.length > 0) {
    //     const playlistIndexes = playlist.map((e) => e.index)
    //     if (playlistIndexes.includes(song.index)) {
    //         inPlayList = true
    //         const songId = playlist.find((e) => e.index === song.index)?.id
    //     }
    // }

    // let isCurrentSong = currentSong.index === index

    // if (inPlayList) {
    //     isCurrentSong = currentSong.title === song.title
    // }

    const handleChangeSurah = () => {
        setCurrentSurah(surah)
    }

    // useEffect(() => {
    //     changeSong(currentIndex)
    // }, [currentIndex])

    // useEffect(() => {
    //     if (isCurrentSong && card.current) {
    //         window.scrollTo({ top: card.current.offsetTop, behavior: 'smooth' })
    //     }
    // }, [isCurrentSong])

    // useEffect(() => {
    //     if (songDeleted || songAdded) {
    //         getPlaylist()
    //     }
    // }, [songDeleted, songAdded])

    return (
        <div ref={card} className={`surah ${isCurrentSurah(surah.surahNumber) ? 'activeSurah' : ''}`} onClick={handleChangeSurah}>
            <div className="authorImage" style={{ backgroundImage: `url(${surah.photo})` }}></div>
            <div className="body">
                <h3 className="title">{surah.title}</h3>
                <p className="author">{surah.quranReciter}</p>
            </div>
            {/* {isAuthenticated ?
                <div className="option">
                    {inPlayList ?
                        <AiFillCheckCircle size={30} onClick={(e) => {
                            e.stopPropagation()
                            if (songId) {
                                removeSong({ id: songId })
                            }
                        }} />
                        :
                        <IoMdAddCircle size={30} onClick={(e) => {
                            e.stopPropagation()
                            addSongToPlaylist({ song })
                        }} />
                    }
                </div> :
                <></>
            } */}
        </div>
    )
}
