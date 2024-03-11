import { FormEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './search.scss'
import { useSearch } from '../../../hooks/useSearch'
import { useSurah } from '../../../hooks/useSurah'

export const Search = () => {
    const { pathname } = useLocation()
    const { setSearchTerm, searchTerm } = useSurah()
    const { search } = useSearch();

    const onSearch = (e: FormEvent<HTMLInputElement>) => {
        const searchTerm = e.currentTarget.value
        search(searchTerm)
        setSearchTerm(searchTerm)
    }

    useEffect(() => {
        setSearchTerm('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <form className="search-box">
            <input type="text" placeholder=" "
                value={searchTerm}
                onChange={onSearch}
            />
            <button type="reset"></button>
        </form>
    )
}
