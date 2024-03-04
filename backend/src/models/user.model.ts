import { Schema, model } from "mongoose";
import { Surah, User, UserProgress } from "../utils/types.js";

const StringRequiredType = {
    type: String,
    required: true,
}

const SurahSchema = new Schema<Surah>({
    id: {
        ...StringRequiredType
    },
    title: {
        ...StringRequiredType
    },
    url: {
        ...StringRequiredType
    },
    quranReciter: {
        ...StringRequiredType
    },
    photo: {
        ...StringRequiredType
    },
    surahNumber: {
        type: Number,
        required: true,
    }
})

const UserProgressSchema = new Schema<UserProgress>({
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
})

const UserSchema = new Schema<User>({
    userId: {
        ...StringRequiredType
    },
    playlist: [SurahSchema],
    userProgress: UserProgressSchema
}, {
    timestamps: true
})


export const UserModel = model('User', UserSchema)