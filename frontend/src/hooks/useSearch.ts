import { useLocation } from "react-router-dom";
import { useSurah } from "./useSurah";

export const useSearch = () => {
    const { pathname } = useLocation()
    const { suwar,
        quranReciters,
        setSearchedQuranReciters,
        setSearchedSuwar
    } = useSurah()

    const search = (searchTerm: string) => {
        if (pathname === '/') {
            const searchedQuranReciters = quranReciters.filter(
                (quranReciter) =>
                    quranReciter.quranReciter.includes(searchTerm)
            )
            setSearchedQuranReciters(searchedQuranReciters)
        } else {
            const searchedSuwar = suwar.filter(
                (surah) => surah.title.includes(searchTerm)
            )
            setSearchedSuwar(searchedSuwar)
        }
    }

    return {
        search
    }
}