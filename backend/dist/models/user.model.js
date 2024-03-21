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
const UserSchema = new Schema({
    userId: {
        ...StringRequiredType
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
    userProgress: UserProgressSchema
}, {
    timestamps: true
});
UserSchema.set('toJSON', {
    transform: function (_, ret) {
        ret.createdAt = ret.createdAt.toLocaleString();
        ret.updatedAt = ret.updatedAt.toLocaleString();
        return ret;
    }
});
export const UserModel = model('User', UserSchema);
