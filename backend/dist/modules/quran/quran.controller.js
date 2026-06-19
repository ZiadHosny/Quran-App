"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostPlayed = exports.playSurah = exports.getCountViews = exports.getViews = exports.getQuranReciters = exports.getAllSuwarQuranReciter = void 0;
const catchAsyncError_1 = require("../../utils/catchAsyncError");
const quran_1 = require("../../data/quran");
const response_1 = require("../../utils/response");
const view_model_1 = require("../../models/view.model");
const surah_model_1 = require("../../models/surah.model");
exports.getAllSuwarQuranReciter = (0, catchAsyncError_1.catchAsyncError)(async (req, res) => {
    const paramId = req.params.id;
    let suwar = [];
    suwar = (0, quran_1.getAllQuran)()[paramId];
    return (0, response_1.sendResponse)({
        res,
        message: 'get ALl Suwar successfully',
        status: 200,
        data: suwar,
    });
});
exports.getQuranReciters = (0, catchAsyncError_1.catchAsyncError)(async (req, res) => {
    const userAgent = req.headers['user-agent'] ?? '';
    const browser = userAgent.match(/(Chrome)\/([\d.]+)/) ||
        userAgent.match(/(Firefox)\/([\d.]+)/);
    const browserName = browser ? browser[1] : 'Unknown';
    let deviceType = 'Unknown';
    if (userAgent.includes('Mobile')) {
        deviceType = 'Mobile';
    }
    else if (userAgent.includes('Tablet')) {
        deviceType = 'Tablet';
    }
    else if (userAgent.includes('Windows')) {
        deviceType = 'Windows PC';
    }
    else if (userAgent.includes('Macintosh')) {
        deviceType = 'Macintosh';
    }
    else if (userAgent.includes('Linux')) {
        deviceType = 'Linux PC';
    }
    const userAgentData = {
        userAgent,
        deviceType,
        browserName,
    };
    if (req.hostname !== 'localhost') {
        if (req.user) {
            await view_model_1.ViewModel.create({
                userId: req.user.userId,
                name: req.user.name,
                email: req.user.email,
                ...userAgentData,
            });
        }
        else {
            await view_model_1.ViewModel.create({
                ...userAgentData,
            });
        }
    }
    return (0, response_1.sendResponse)({
        res,
        message: 'get Quran Reciters successfully',
        status: 200,
        data: (0, quran_1.allQuranReciters)(),
    });
});
exports.getViews = (0, catchAsyncError_1.catchAsyncError)(async (_, res) => {
    const views = await view_model_1.ViewModel.find({}).select('-userAgent -__v');
    return (0, response_1.sendResponse)({
        res,
        message: 'get Views successfully',
        status: 200,
        data: { views },
    });
});
exports.getCountViews = (0, catchAsyncError_1.catchAsyncError)(async (_, res) => {
    const countViews = await view_model_1.ViewModel.countDocuments();
    return (0, response_1.sendResponse)({
        res,
        message: 'get Count Views successfully',
        status: 200,
        data: { countViews },
    });
});
exports.playSurah = (0, catchAsyncError_1.catchAsyncError)(async (req, res) => {
    const surah = req.body;
    const { id, photo, quranReciter, surahNumber, title, url } = surah;
    const surahPlayed = await surah_model_1.SurahPlayedModel.findOneAndUpdate({ id }, { $inc: { surahPlayedCount: 1 } });
    if (!surahPlayed) {
        await surah_model_1.SurahPlayedModel.create({
            id,
            photo,
            quranReciter,
            surahNumber,
            title,
            url,
            surahPlayedCount: 1,
        });
    }
    return (0, response_1.sendResponse)({
        res,
        message: 'Surah added To DB successfully',
        status: 200,
    });
});
exports.mostPlayed = (0, catchAsyncError_1.catchAsyncError)(async (_, res) => {
    const suwarPlayed = await surah_model_1.SurahPlayedModel.find({})
        .sort('-surahPlayedCount')
        .limit(30);
    return (0, response_1.sendResponse)({
        res,
        message: 'get Suwar Played DB successfully',
        status: 200,
        data: suwarPlayed,
    });
});
