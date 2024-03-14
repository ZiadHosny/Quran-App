import { useEffect, useRef, useState } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { BiSolidPlaylist } from 'react-icons/bi'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from 'react-router-dom';

export const AccountMenu = () => {
    const menuRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth0();

    const location = useLocation();

    const menuToggle = () => {
        setIsOpen(!isOpen);
    }
    // Function to close menu when clicked outside
    const handleClickOutside = (event: any) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    // Effect to add event listener on component mount
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        // Clean up function to remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Reset state when navigating to this page
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // logout
    const onclickLogout = () => {
        logout({
            logoutParams: { returnTo: window.location.origin }
        })
    }

    const Menu = () => (
        <div className="menu active" ref={menuRef} >
            <h3>{user?.name}</h3>
            <ul >
                <li >
                    <Link
                        className='link'
                        to={'/myPlaylist'}>
                        <BiSolidPlaylist style={{ marginRight: 10 }} />
                        My Playlist
                    </Link>
                </li>
                <li className='link logout' onClick={onclickLogout} >
                    <FiLogOut style={{ marginRight: 10 }} />
                    <div>Log out</div>
                </li>
            </ul>
        </div>
    )

    return (
        <div className="action">
            <div className="profile" onClick={menuToggle}>
                <img src={user?.picture} alt='userPicture' />
            </div>
            {isOpen && <Menu />}
        </div>
    )


}
