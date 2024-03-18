import { CSSProperties } from 'react';
import './downloadBar.scss'
import { useSurah } from '../../hooks/useSurah';

export const DownloadBar = () => {
    const { downloadProgress } = useSurah()

    const style = { '--progress': `${downloadProgress}%` } as CSSProperties

    return (
        <div className="popup">
            <div className="progress">
                <div className="bar" style={style}></div>
            </div >
        </div>
    )
}
