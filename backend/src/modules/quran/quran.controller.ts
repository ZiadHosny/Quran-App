import { Request, Response } from "express"
import { catchAsyncError } from '../../utils/catchAsyncError.js'
import { allQuranReciters, getAllQuran } from "../../data/quran.js";
import { sendResponse } from "../../utils/response.js";
import { AuthRequest, Surah } from "../../utils/types.js";
import { ViewModel } from "../../models/view.model.js";
import { SurahPlayedModel } from "../../models/surah.model.js";

export const getAllSuwarQuranReciter = catchAsyncError(async (req: Request, res: Response) => {
    const paramId = req.params.id

    let suwar: Surah[] = []

    suwar = getAllQuran()[paramId]

    return sendResponse({
        res,
        message: 'get ALl Suwar successfully',
        status: 200,
        data: suwar
    })
})

export const getQuranReciters = catchAsyncError(async (req: AuthRequest, res: Response) => {

    const userAgent = req.headers["user-agent"] ?? ''
    const browser = userAgent.match(/(Chrome)\/([\d.]+)/) || userAgent.match(/(Firefox)\/([\d.]+)/);
    const browserName = browser ? browser[1] : 'Unknown';

    let deviceType = 'Unknown';

    if (userAgent.includes('Mobile')) {
        deviceType = 'Mobile';
    } else if (userAgent.includes('Tablet')) {
        deviceType = 'Tablet';
    } else if (userAgent.includes('Windows')) {
        deviceType = 'Windows PC';
    } else if (userAgent.includes('Macintosh')) {
        deviceType = 'Macintosh';
    } else if (userAgent.includes('Linux')) {
        deviceType = 'Linux PC';
    }

    const userAgentData = {
        userAgent,
        deviceType,
        browserName,
    }

    if (req.hostname !== 'localhost') {
        if (req.user) {
            await ViewModel.create({
                userId: req.user.userId,
                name: req.user.name,
                email: req.user.email,
                ...userAgentData
            })
        } else {
            await ViewModel.create({
                ...userAgentData
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

    const views = await ViewModel.find({}).select('-userAgent -__v')

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

export const playSurah = catchAsyncError(async (req: AuthRequest, res: Response) => {
    const surah = req.body as Surah
    const { id, photo, quranReciter, surahNumber, title, url } = surah

    const surahPlayed = await SurahPlayedModel.findOneAndUpdate(
        { id }, { $inc: { surahPlayedCount: 1 } }
    );

    if (!surahPlayed) {
        await SurahPlayedModel.create({
            id,
            photo,
            quranReciter,
            surahNumber,
            title,
            url,
            surahPlayedCount: 1
        })
    }

    return sendResponse({
        res,
        message: 'Surah added To DB successfully',
        status: 200,
    })
})

export const mostPlayed = catchAsyncError(async (_: AuthRequest, res: Response) => {

    const suwarPlayed = await SurahPlayedModel.find({})
        .sort('-surahPlayedCount');

    return sendResponse({
        res,
        message: 'get Suwar Played DB successfully',
        status: 200,
        data: suwarPlayed
    })
})