import { VERSION } from '../../utils/envs'
import './footer.scss'

export const Footer = () => {

    return (
        <footer className='flex-center-center'>
            <a className='link' href="https://ziadhosny.vercel.app/">
                Ziad Hosny
            </a>
            |
            <p>Version : {VERSION}</p>
        </footer>
    )
}
