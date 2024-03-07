import { Request, Response } from "express"
import { catchAsyncError } from '../../utils/catchAsyncError.js'
import { allQuranReciters, getAllQuran } from "../../data/quran.js";
import { sendResponse } from "../../utils/response.js";
import { AuthRequest, Surah } from "../../utils/types.js";
import { ViewModel } from "../../models/view.model.js";

export const getAllSuwarQuranReciter = catchAsyncError(async (req: Request, res: Response) => {
    const paramId = req.params.id

    let suwar: Surah[] = []

    // if (paramId === 'abdurahmanmesaad') {
    //     suwar = getAbdurahmanmesaad()
    // } else {
    // }

    suwar = getAllQuran()[paramId]

    return sendResponse({
        res,
        message: 'get ALl Suwar successfully',
        status: 200,
        data: suwar
    })
})

export const getQuranReciters = catchAsyncError(async (req: AuthRequest, res: Response) => {

    const userAgent = req.headers["user-agent"]
    if (req.hostname !== 'localhost') {
        if (req.user) {
            await ViewModel.create({
                userId: req.user.userId,
                name: req.user.name,
                email: req.user.email,
                userAgent
            })
        } else {
            await ViewModel.create({
                userAgent
            })
        }
    }
    return sendResponse({
        res,
        message: 'get Quran Reciters successfully',
        status: 200,
        data: allQuranReciters()
    })
})

export const getViews = catchAsyncError(async (_: AuthRequest, res: Response) => {

    const views = await ViewModel.find()

    return sendResponse({
        res,
        message: 'get Views successfully',
        status: 200,
        data: { views }
    })
})

export const getCountViews = catchAsyncError(async (_: AuthRequest, res: Response) => {

    const countViews = await ViewModel.countDocuments()

    return sendResponse({
        res,
        message: 'get Count Views successfully',
        status: 200,
        data: { countViews }
    })
})