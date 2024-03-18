import { NavLink } from "react-router-dom"
import { QuranReciterType } from "../../utils/types"
import './quranReciter.scss'

export const QuranReciter = ({ quranReciter, bgColor }:
    { quranReciter: QuranReciterType, bgColor?: string }) => {
    return (
        <NavLink style={{ backgroundColor: bgColor }} to={quranReciter.id} className={`quranReciter`}>
            <div className="authorImage" style={{ backgroundImage: `url(${quranReciter.photo})` }}></div>
            <div className="body">
                <p className="arabic-font author">{quranReciter.quranReciter}</p>
            </div>
        </NavLink>
    )
}
