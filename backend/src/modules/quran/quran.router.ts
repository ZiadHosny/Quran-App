import express from "express";
import * as quran from "./quran.controller.js";
import { userReq } from "../../middlewares/userReq.js";

const router = express.Router()

router.get('/quranReciters', userReq, quran.getQuranReciters)
router.get('/:id/Suwar', quran.getAllSuwarQuranReciter)
router.get('/views', quran.getViews)
router.get('/countViews', quran.getCountViews)
router.post('/playSurah', quran.playSurah)
router.get('/mostPlayed', quran.mostPlayed)

export const quranRouter = router