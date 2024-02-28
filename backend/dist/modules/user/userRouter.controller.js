import { UserModel } from '../../models/user.model.js';
import { catchAsyncError } from "../../utils/catchAsyncError.js";
// export const updateUserProgress = async (req: Request, res: Response) => {
//     const { userId } = req as any
//     const { song, volume, currentMin, random, repeat } = req.body
//     const { title, file_format, index, photo, singer, url } = song as SongType
//     const user = await userProgress.findOne({ where: { userId: userId } })
//     if (user) {
//         user.update({
//             title, file_format, index, photo, singer, url, volume, current_min: currentMin, random, repeat,
//         }).then(() => {
//             console.log('Updated Successfully', title, currentMin)
//             res.json({ message: 'Updated Successfully' })
//         }).catch((e) => {
//             console.log(e)
//         })
//     }
//     else {
//         userProgress.create({
//             userId: userId,
//             title,
//             file_format,
//             index,
//             photo,
//             singer,
//             url,
//             volume,
//             current_min: currentMin,
//             random,
//             repeat,
//         }).then(() => {
//             res.json({ message: 'add UserProgress Successfully' })
//         }).catch((e) => {
//             console.log(e)
//         })
//     }
// }
// export const getUserProgress = async (req: Request, res: Response) => {
//     const { userId } = req as any
//     const user = await UserModel.findOne({ where: { userId } }, { userProgress })
//     if (user) {
//         res.json(user)
//     }
// }
export const addSurahToUserPlaylist = catchAsyncError(async (req, res) => {
    const userId = req.userId;
    console.log(userId, 'xxxxxxxxx');
    const { surah } = req.body;
    const { id, surahNumber, title, photo, quranReciter, url } = surah;
    const surahInDB = await UserModel.findOne({ where: { userId } });
    if (surahInDB) {
        return res.json({ message: 'Surah Is Already Exist' });
    }
    const user = await UserModel.findOne({ where: { userId } });
    // .select('playlist')
    console.log(user, 'zzzzzzzz');
    res.json({ saasd: user });
    // UserModel.create({ userId: userId, title, file_format, index, photo, singer, url })
    //     .then(() => {
    //         res.json({ message: 'add Surah To User Playist Successfully' })
    //     }).catch((e) => {
    //         console.log(e)
    //     })
});
