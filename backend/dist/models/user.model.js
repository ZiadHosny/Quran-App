"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const StringRequiredType = {
    type: String,
    required: true,
};
const SurahSchema = new mongoose_1.Schema({
    id: {
        ...StringRequiredType,
    },
    title: {
        ...StringRequiredType,
    },
    titleEn: {
        type: String,
    },
    url: {
        ...StringRequiredType,
    },
    quranReciter: {
        ...StringRequiredType,
    },
    quranReciterEn: {
        type: String,
    },
    photo: {
        ...StringRequiredType,
    },
    surahNumber: {
        type: Number,
        required: true,
    },
});
const UserProgressSchema = new mongoose_1.Schema({
    currentSurah: SurahSchema,
    currentMin: {
        type: String,
    },
    quranReciterId: {
        type: String,
    },
    volume: {
        type: Number,
    },
    random: {
        type: Boolean,
        default: false,
    },
    repeat: {
        type: Boolean,
        default: false,
    },
});
const UserSchema = new mongoose_1.Schema({
    userId: {
        ...StringRequiredType,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    picture: {
        type: String,
    },
    locale: {
        type: String,
    },
    playlist: [SurahSchema],
    userProgress: UserProgressSchema,
}, {
    timestamps: true,
});
UserSchema.set('toJSON', {
    transform: function (_, ret) {
        ret.createdAt = ret.createdAt.toLocaleString();
        ret.updatedAt = ret.updatedAt.toLocaleString();
        return ret;
    },
});
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
