import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import './navbar.scss'
import { AccountMenu } from './AccountMenu';
import { useProgress } from '../../hooks/useProgress';
import { Search } from './Search';
import { UseNotification } from '../../hooks/UseNotification';

export const Navbar = () => {
    const navigate = useNavigate();
    const { sendNotification } = UseNotification()
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { getProgress } = useProgress()
    const { getIdTokenClaims } = useAuth0()

    const onClickLogin = async () => {
        await loginWithRedirect()
    }

    // useEffect(() => {
    //     const fn = async () => {
    //         if (isAuthenticated) {
    //             await getProgress()
    //         }
    //     }
    //     fn()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isAuthenticated])

    const clickHomeIcon = async () => {
        navigate('/')
        // await sendNotification()
    }

    return (
        <nav className='flex-center-sb' style={{ zIndex: 3 }}>
            <img
                className='logo'
                src={'/images/quran512.png'}
                alt='quranImg'
                onClick={clickHomeIcon} />
            <div className="search-container">
                <Search />
            </div>
            <div>
                {isAuthenticated ?
                    <AccountMenu />
                    :
                    <button onClick={onClickLogin} className='login'>
                        Login
                    </button>
                }
            </div>
        </nav >
    )
}