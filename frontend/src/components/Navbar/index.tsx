import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from 'react-router-dom';


import './navbar.scss'
import { AccountMenu } from './AccountMenu';
import { UseNotification } from '../../hooks/UseNotification';
import quranImg from '../../utils/images/quran.png'
import { useProgress } from '../../hooks/useProgress';

export const Navbar = () => {
    const navigate = useNavigate()
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { getProgress } = useProgress()
    const [{ }, subscribe] = UseNotification()
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

    const enableNotifications = async () => {
        await subscribe()
    }

    const clickHomeIcon = () => {
        navigate('/')
    }

    return (
        <nav className='flex-center-sb'>
            <img className='logo'
                src={quranImg}
                alt='quranImg'
                onClick={clickHomeIcon} />
            <div>
                {isAuthenticated ?
                    <AccountMenu />
                    :
                    <button onClick={onClickLogin} className='login'>
                        Login
                    </button>
                }
            </div>
        </nav>
    )
}


{/* <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between', padding: '0 10px', alignItems: 'center' }}>
                <AiOutlineHome color='white' size={30} style={{ cursor: 'pointer' }} onClick={() => {
                    enableNotifications()
                    // setPlayListPage(false)
                }} />
                <AiOutlineHome color='white' size={30} style={{ cursor: 'pointer' }} onClick={() => {
                    enableNotifications()
                    // setPlayListPage(false)
                }} />
                <AiOutlineHome color='white' size={30} style={{ cursor: 'pointer' }} onClick={() => {
                    enableNotifications()
                    // setPlayListPage(false)
                }} />
            </div> */}