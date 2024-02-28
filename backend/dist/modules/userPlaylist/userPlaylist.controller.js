export {};
// import { SongType } from "../../types.js"
// import { userPlayList } from "../../models/userPlayList.js"
// export const getUserPlaylist = async (req: Request, res: Response) => {
//     const { userId } = req as any
//     const playlist = await userPlayList.findAll({ where: { userId: userId } })
//     if (playlist) {
//         res.json(playlist)
//     }
// }
// export const removeSongFromUserPlaylist = async (req: Request, res: Response) => {
//     const { userId } = req as any
//     const { id } = req.body
//     userPlayList.destroy({ where: { userId: userId, id } }).then(() => {
//         console.log('remove Song From User Playist Successfully')
//         res.json({ message: 'remove Song From User Playist Successfully' })
//     }).catch((e) => {
//         console.log(e)
//     })
// }
