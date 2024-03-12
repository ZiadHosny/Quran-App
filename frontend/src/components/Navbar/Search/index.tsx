import { FormEvent, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
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

    const onMouseOut = (e: FormEvent<HTMLInputElement>) => {
        setSearchTerm('')
    }

    useEffect(() => {
        setSearchTerm('')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <div className="box">
            <form name="search">
                <input type="text"
                    className="input"
                    name="txt"
                    value={searchTerm}
                    onChange={onSearch}
                // onMouseOut={onMouseOut}
                />
            </form>
            <FaSearch className='icon'/>
            {/* <i className="fas fa-search"></i> */}
        </div>
    )
}
