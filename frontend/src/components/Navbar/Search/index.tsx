import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useLocation } from 'react-router-dom'
import './search.scss'
import { useSearch } from '../../../hooks/useSearch'
import { useSurah } from '../../../hooks/useSurah'
import { useTranslation } from '../../../hooks/useTranslation'

export const Search = () => {
    const { pathname } = useLocation()
    const { setSearchTerm, searchTerm } = useSurah()
    const { search } = useSearch();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    const openSearch = () => {
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 40);
    };

    const closeSearch = () => {
        setIsOpen(false);
        search('');
        setSearchTerm('');
    };

    const onSearch = (e: FormEvent<HTMLInputElement>) => {
        const term = e.currentTarget.value;
        search(term);
        setSearchTerm(term);
    };

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeSearch();
    };

    // close on click outside
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: MouseEvent) => {
            if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
                closeSearch();
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    // reset on route change
    useEffect(() => {
        setSearchTerm('');
        setIsOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <div ref={boxRef} className={`search-box${isOpen ? ' search-box--open' : ''}`}>
            <button
                className="search-icon-btn"
                onClick={isOpen ? closeSearch : openSearch}
                aria-label="search"
            >
                {isOpen ? <MdClose size={20} /> : <FaSearch size={15} />}
            </button>

            <input
                ref={inputRef}
                type="text"
                className="search-input"
                value={searchTerm}
                placeholder={t('search')}
                onChange={onSearch}
                onKeyDown={onKeyDown}
                tabIndex={isOpen ? 0 : -1}
            />
        </div>
    );
};
