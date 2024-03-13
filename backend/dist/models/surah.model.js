import { Schema, model } from "mongoose";
const StringRequiredType = {
    type: String,
    required: true,
};
const SurahPlayedSchema = new Schema({
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
    },
    surahPlayedCount: {
        type: Number,
        required: true,
    }
});
export const SurahPlayedModel = model('SurahPlayed', SurahPlayedSchema);
