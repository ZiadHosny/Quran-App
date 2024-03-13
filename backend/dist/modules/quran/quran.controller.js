import { catchAsyncError } from '../../utils/catchAsyncError.js';
import { allQuranReciters, getAllQuran } from "../../data/quran.js";
import { sendResponse } from "../../utils/response.js";
import { ViewModel } from "../../models/view.model.js";
import { SurahPlayedModel } from "../../models/surah.model.js";
export const getAllSuwarQuranReciter = catchAsyncError(async (req, res) => {
    const paramId = req.params.id;
    let suwar = [];
    // if (paramId === 'abdurahmanmesaad') {
    //     suwar = getAbdurahmanmesaad()
    // } else {
    // }
    suwar = getAllQuran()[paramId];
    return sendResponse({
        res,
        message: 'get ALl Suwar successfully',
        status: 200,
        data: suwar
    });
});
export const getQuranReciters = catchAsyncError(async (req, res) => {
    const userAgent = req.headers["user-agent"];
    if (req.hostname !== 'localhost') {
        if (req.user) {
            await ViewModel.create({
                userId: req.user.userId,
                name: req.user.name,
                email: req.user.email,
                userAgent
            });
        }
        else {
            await ViewModel.create({
                userAgent
            });
        }
    }
    return sendResponse({
        res,
        message: 'get Quran Reciters successfully',
        status: 200,
        data: allQuranReciters()
    });
});
export const getViews = catchAsyncError(async (_, res) => {
    const views = await ViewModel.find();
    return sendResponse({
        res,
        message: 'get Views successfully',
        status: 200,
        data: { views }
    });
});
export const getCountViews = catchAsyncError(async (_, res) => {
    const countViews = await ViewModel.countDocuments();
    return sendResponse({
        res,
        message: 'get Count Views successfully',
        status: 200,
        data: { countViews }
    });
});
export const playSurah = catchAsyncError(async (req, res) => {
    const surah = req.body;
    const { id, photo, quranReciter, surahNumber, title, url } = surah;
    const surahPlayed = await SurahPlayedModel.findOneAndUpdate({ id }, { $inc: { surahPlayedCount: 1 } });
    if (!surahPlayed) {
        await SurahPlayedModel.create({
            id,
            photo,
            quranReciter,
            surahNumber,
            title,
            url,
            surahPlayedCount: 1
        });
    }
    return sendResponse({
        res,
        message: 'Surah added To DB successfully',
        status: 200,
    });
});
export const mostPlayed = catchAsyncError(async (_, res) => {
    const suwarPlayed = await SurahPlayedModel.find({})
        .sort('-surahPlayedCount');
    return sendResponse({
        res,
        message: 'get Suwar Played DB successfully',
        status: 200,
        data: suwarPlayed
    });
});
