import './footer.scss'

export const Footer = () => {
    const version = '0.5.2'
    return (
        <footer >
            <p>Ziad Hosny</p> |
            <p><a href="mailto:ziadhosny007@gmail.com">ziadhosny007@gmail.com</a></p> |
            <p>version : {version}</p>
        </footer>
    )
}
