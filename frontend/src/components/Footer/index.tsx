import { VERSION } from '../../utils/envs'
import './footer.scss'

export const Footer = () => {
    return (
        <footer className='flex-center-center'>
            <p>Ziad Hosny</p> |
            {/* <p><a href="mailto:ziadhosny007@gmail.com">ziadhosny007@gmail.com</a></p> | */}
            <p>Version : {VERSION}</p>
        </footer>
    )
}
