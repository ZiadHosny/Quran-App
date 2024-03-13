import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { QuranSuwar } from "./pages/QuranSuwar"
import { MyPlaylist } from "./pages/MyPlaylist"
import { MostPlayed } from "./pages/MostPlayed"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myPlaylist" element={<MyPlaylist />} />
            <Route path="/mostPlayed" element={<MostPlayed />} />
            <Route path="/:quranReciter" element={<QuranSuwar />} />
            <Route path="*" element={<Navigate to="" />} />
        </Routes>
    )
}
