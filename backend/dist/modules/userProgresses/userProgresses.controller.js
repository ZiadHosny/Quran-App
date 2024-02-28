export {};
// import { userProgress } from "../../models/userProgress.js"
// import { SongType } from "../../types.js"
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
//     const user = await userProgress.findOne({ where: { userId: userId } })
//     if (user) {
//         res.json(user)
//     }
// }
