import { NextFunction, Response } from "express"

import { UserModel } from '../../models/user.model.js'
import { AuthRequest, Surah, UserProgress } from "../../utils/types.js"
import { catchAsyncError } from "../../utils/catchAsyncError.js"
import { sendResponse } from "../../utils/response.js"
import { AppError } from "../../utils/AppError.js"

// PUT User Progress 
export const saveUserProgress = catchAsyncError(async (req: AuthRequest, res: Response) => {
    const { body, user } = req
    const { currentSurah, currentMin, random, repeat, volume, quranReciterId } = body as UserProgress

    await UserModel.findByIdAndUpdate(user._id, {
        userProgress: {
            currentSurah,
            quranReciterId,
            currentMin,
            random,
            repeat,
            volume,
        }
    })

    sendResponse({
        res,
        message: 'Save User Progress Successfully',
        status: 200
    })
})
// GET User Progress
export const getUserProgress = catchAsyncError(async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { user } = req

    const userProgress = user.userProgress

    if (userProgress) {
        sendResponse({
            res,
            message: 'Get User Progress Successfully',
            status: 200,
            data: userProgress
        })
    } else {
        return next(new AppError('Cant Found User Progress', 400))
    }
})
// Put Surah To Playlist
export const addSurahToUserPlaylist = catchAsyncError(async (req: AuthRequest, res: Response, next: NextFunction) => {

    const { user, body } = req
    const currentSurah = body as Surah

    const playlist = user.playlist
    const found = playlist.find((surah) => surah.id === currentSurah.id)
    
    if (found) {
        return next(new AppError('Surah Is Already Exist In Playlist', 400))
    }

    await UserModel.findByIdAndUpdate(user._id, {
        playlist: [
            currentSurah,
            ...playlist
        ]
    })

    sendResponse({
        res,
        message: 'تم اضافة السورة في قائمة التشغيل',
        status: 200,
    })
})
// DELETE Surah To Playlist
export const removeSurahToUserPlaylist = catchAsyncError(async (req: AuthRequest, res: Response, next: NextFunction) => {
    
    const { user, body } = req
    const surahId = body.surahId
    const playlist = user.playlist

    const newList = playlist.filter((surah) => surah.id !== surahId)

    await UserModel.findByIdAndUpdate(user._id, {
        playlist: [
            ...newList
        ]
    })

    sendResponse({
        res,
        message: 'تم مسح السورة بنجاح',
        status: 200,
    })
})
// GET User Progress
export const getUserPlaylist = catchAsyncError(async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { user } = req

    const playlist = user.playlist

    if (playlist) {
        sendResponse({
            res,
            message: 'Get User Playlist Successfully',
            status: 200,
            data: playlist
        })
    } else {
        return next(new AppError('Cant Found User Playlist', 400))
    }
})
