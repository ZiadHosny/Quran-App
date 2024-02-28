import { NavLink } from "react-router-dom"
import { QuranReciterType } from "../../utils/types"
import './quranReciter.scss'

export const QuranReciter = ({ quranReciter }: { quranReciter: QuranReciterType }) => {
    return (
        <NavLink to={quranReciter.id} className={`quranReciter`}>
            <div className="authorImage" style={{ backgroundImage: `url(${quranReciter.photo})` }}></div>
            <div className="body">
                <p className="author">{quranReciter.quranReciter}</p>
            </div>
        </NavLink>
    )
}
