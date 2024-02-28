import express from "express";
import * as quran from "./quran.controller.js";

const router = express.Router()

router.get('/quranReciters', quran.getQuranReciters)
router.get('/:id/Suwar', quran.getAllSuwarQuranReciter)

export const quranRouter = router