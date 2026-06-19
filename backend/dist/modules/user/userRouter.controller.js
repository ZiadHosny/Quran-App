"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPlaylist = exports.removeSurahToUserPlaylist = exports.addSurahToUserPlaylist = exports.getUserProgress = exports.saveUserProgress = void 0;
const user_model_1 = require("../../models/user.model");
const catchAsyncError_1 = require("../../utils/catchAsyncError");
const response_1 = require("../../utils/response");
const AppError_1 = require("../../utils/AppError");
// PUT User Progress
exports.saveUserProgress = (0, catchAsyncError_1.catchAsyncError)(async (req, res) => {
    const { body, user } = req;
    const { currentSurah, currentMin, random, repeat, volume, quranReciterId } = body;
    await user_model_1.UserModel.findByIdAndUpdate(user._id, {
        userProgress: {
            currentSurah,
            quranReciterId,
            currentMin,
            random,
            repeat,
            volume,
        },
    });
    (0, response_1.sendResponse)({
        res,
        message: 'Save User Progress Successfully',
        status: 200,
    });
});
// GET User Progress
exports.getUserProgress = (0, catchAsyncError_1.catchAsyncError)(async (req, res, next) => {
    const { user } = req;
    const userProgress = user.userProgress;
    if (userProgress) {
        (0, response_1.sendResponse)({
            res,
            message: 'Get User Progress Successfully',
            status: 200,
            data: userProgress,
        });
    }
    else {
        return next(new AppError_1.AppError('Cant Found User Progress', 400));
    }
});
// Put Surah To Playlist
exports.addSurahToUserPlaylist = (0, catchAsyncError_1.catchAsyncError)(async (req, res, next) => {
    const { user, body } = req;
    const currentSurah = body;
    const playlist = user.playlist;
    const found = playlist.find((surah) => surah.id === currentSurah.id);
    if (found) {
        return next(new AppError_1.AppError('Surah Is Already Exist In Playlist', 400));
    }
    await user_model_1.UserModel.findByIdAndUpdate(user._id, {
        playlist: [currentSurah, ...playlist],
    });
    (0, response_1.sendResponse)({
        res,
        message: 'تم اضافة السورة في قائمة التشغيل',
        status: 200,
    });
});
// DELETE Surah To Playlist
exports.removeSurahToUserPlaylist = (0, catchAsyncError_1.catchAsyncError)(async (req, res, next) => {
    const { user, body } = req;
    const surahId = body.surahId;
    const playlist = user.playlist;
    const newList = playlist.filter((surah) => surah.id !== surahId);
    await user_model_1.UserModel.findByIdAndUpdate(user._id, {
        playlist: [...newList],
    });
    (0, response_1.sendResponse)({
        res,
        message: 'تم مسح السورة من قائمة التشغيل',
        status: 200,
    });
});
// GET User Progress
exports.getUserPlaylist = (0, catchAsyncError_1.catchAsyncError)(async (req, res, next) => {
    const { user } = req;
    const playlist = user.playlist;
    if (playlist) {
        (0, response_1.sendResponse)({
            res,
            message: 'Get User Playlist Successfully',
            status: 200,
            data: playlist,
        });
    }
    else {
        return next(new AppError_1.AppError('Cant Found User Playlist', 400));
    }
});
