import { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import './navbar.scss'
import { useAuth0 } from "@auth0/auth0-react";
import { AccountMenu } from './AccountMenu';
import { UseNotification } from '../../hooks/UseNotification';
import quranImg from '../../utils/quran.png'
import { Link, useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/getToken';
import { useProgress } from '../../hooks/useProgress';
import { useLoading } from '../../hooks/useLoading';

export const Navbar = () => {
    const navigate = useNavigate()
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { getProgress } = useProgress()
    const [{ }, subscribe] = UseNotification()
    const { getIdTokenClaims } = useAuth0()

    const onClickLogin = async () => {
        await loginWithRedirect()
    }

    useEffect(() => {
        const fn = async () => {
            if (isAuthenticated) {
                await getProgress()
            }
        }
        fn()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated])

    const enableNotifications = async () => {
        await subscribe()
    }

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px', alignItems: 'center' }}>
            <img src={quranImg} alt='quranImg' style={{ width: 60, height: 40 }} onClick={async () => {
                navigate('/')

                const token = await getToken(getIdTokenClaims)
            }} />

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
            <div>
                {
                    isAuthenticated ?
                        <AccountMenu />
                        :
                        <button onClick={onClickLogin} style={{
                            backgroundColor: 'white',
                            width: 100,
                            height: '80%',
                            borderRadius: 10,
                            padding: 10,
                            cursor: 'pointer'
                        }}>Login</button>
                }
            </div>
        </nav>
    )
}
