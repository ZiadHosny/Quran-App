import express from "express";
import * as quran from "./quran.controller.js";

const router = express.Router()


router.get('/quranReciters', quran.getQuranReciters)
router.get('/quranReciter/:id', quran.getQuranReciterSuwar)

export const quranRouter = router