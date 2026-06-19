"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSurahSchema = exports.SurahSchema = exports.progressSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.progressSchema = joi_1.default.object({
    quranReciterId: joi_1.default.string().required(),
    currentMin: joi_1.default.string().required(),
    volume: joi_1.default.number().required(),
    random: joi_1.default.boolean().required(),
    repeat: joi_1.default.boolean().required(),
    currentSurah: joi_1.default.object({
        id: joi_1.default.string().required(),
        surahNumber: joi_1.default.number().required(),
        title: joi_1.default.string().required(),
        url: joi_1.default.string().required(),
        quranReciter: joi_1.default.string().required(),
        photo: joi_1.default.string().required(),
    }),
});
exports.SurahSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
    surahNumber: joi_1.default.number().required(),
    title: joi_1.default.string().required(),
    url: joi_1.default.string().required(),
    quranReciter: joi_1.default.string().required(),
    photo: joi_1.default.string().required(),
});
exports.RemoveSurahSchema = joi_1.default.object({
    surahId: joi_1.default.string().required(),
});
