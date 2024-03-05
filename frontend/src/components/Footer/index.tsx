import { VERSION } from '../../utils/envs'
import './footer.scss'

export const Footer = () => {
    return (
        <footer >
            <p>Ziad Hosny</p> |
            <p><a href="mailto:ziadhosny007@gmail.com">ziadhosny007@gmail.com</a></p> |
            <p>v : {VERSION}</p>
        </footer>
    )
}
