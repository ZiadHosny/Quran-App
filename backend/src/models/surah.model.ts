import { Schema, model } from "mongoose";
import { Surah, } from "../utils/types.js";

const StringRequiredType = {
    type: String,
    required: true,
}

interface SurahPlayed extends Surah {
    surahPlayedCount: number
}

const SurahPlayedSchema = new Schema<SurahPlayed>({
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
})

export const SurahPlayedModel = model('SurahPlayed', SurahPlayedSchema)