import { NavLink } from "react-router-dom"
import { QuranReciterType } from "../../utils/types"
import './quranReciter.scss'

export const QuranReciter = ({ quranReciter, bgColor, imgSize = 200 }:
    { quranReciter: QuranReciterType, bgColor?: string, imgSize?: number }) => {
    return (
        <NavLink style={{ backgroundColor: bgColor }} to={quranReciter.id} className={`quranReciter`}>
            <div className="authorImage" style={{
                backgroundImage: `url(${quranReciter.photo})`,
                width: imgSize,
                height: imgSize
            }}></div>
            <div className="body">
                <p className="arabic-font author">{quranReciter.quranReciter}</p>
            </div>
        </NavLink>
    )
}
