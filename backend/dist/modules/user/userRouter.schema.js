import Joi from "joi";
export const progressSchema = Joi.object({
    quranReciterId: Joi.string().required(),
    currentMin: Joi.string().required(),
    volume: Joi.number().required(),
    random: Joi.boolean().required(),
    repeat: Joi.boolean().required(),
    currentSurah: Joi.object({
        id: Joi.string().required(),
        surahNumber: Joi.number().required(),
        title: Joi.string().required(),
        url: Joi.string().required(),
        quranReciter: Joi.string().required(),
        photo: Joi.string().required(),
    })
});
export const SurahSchema = Joi.object({
    id: Joi.string().required(),
    surahNumber: Joi.number().required(),
    title: Joi.string().required(),
    url: Joi.string().required(),
    quranReciter: Joi.string().required(),
    photo: Joi.string().required(),
});
export const RemoveSurahSchema = Joi.object({
    surahId: Joi.string().required(),
});
