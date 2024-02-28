import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { QuranSuwar } from "./pages/QuranSuwar"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:quranReciter" element={<QuranSuwar />} />
            <Route path="*" element={<Navigate to="" />} />
        </Routes>
    )
}
