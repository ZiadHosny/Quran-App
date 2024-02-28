import { Schema, model } from "mongoose";
const StringRequiredType = {
    type: String,
    required: true,
};
const SurahSchema = new Schema({
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
});
const UserProgressSchema = new Schema({
    currentMin: {
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
const UserSchema = new Schema({
    userId: {
        ...StringRequiredType
    },
    playlist: [SurahSchema],
    currentSong: SurahSchema,
    userProgress: UserProgressSchema
}, {
    timestamps: true
});
export const UserModel = model('User', UserSchema);
