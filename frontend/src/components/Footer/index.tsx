import { VERSION } from '../../utils/envs'
import './footer.scss'

export const Footer = () => {

    return (
        <footer className='flex-center-center'>
            <p
                style={{ cursor: 'pointer', }} >
                <a style={{ color: 'white' }}
                    href="https://ziadhosny.vercel.app/">
                    Ziad Hosny
                </a>
            </p> |
            <p>Version : {VERSION}</p>
        </footer>
    )
}
