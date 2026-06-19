"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurahPlayedModel = void 0;
const mongoose_1 = require("mongoose");
const StringRequiredType = {
    type: String,
    required: true,
};
const SurahPlayedSchema = new mongoose_1.Schema({
    id: {
        ...StringRequiredType,
    },
    title: {
        ...StringRequiredType,
    },
    url: {
        ...StringRequiredType,
    },
    quranReciter: {
        ...StringRequiredType,
    },
    photo: {
        ...StringRequiredType,
    },
    surahNumber: {
        type: Number,
        required: true,
    },
    surahPlayedCount: {
        type: Number,
        required: true,
    },
});
exports.SurahPlayedModel = (0, mongoose_1.model)('SurahPlayed', SurahPlayedSchema);
