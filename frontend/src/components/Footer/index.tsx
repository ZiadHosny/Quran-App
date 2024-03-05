import './footer.scss'

export const Footer = () => {
    const version = '0.5.1'
    return (
        <footer >
            <p>Author: Ziad Hosny</p> |
            <p><a href="mailto:ziadhosny007@gmail.com">ziadhosny007@gmail.com</a></p> |
            <p>version : {version}</p>
        </footer>
    )
}
