import express from "express";

import { addSurahToUserPlaylist, getUserPlaylist, getUserProgress, removeSurahToUserPlaylist, saveUserProgress } from "./userRouter.controller.js";
import { auth } from "../../middlewares/auth.js";
import { validation } from "../../middlewares/validation.js";
import { RemoveSurahSchema, SurahSchema, progressSchema } from "./userRouter.schema.js";

const router = express.Router()

router.route('/playlist')
    .put(auth, validation(SurahSchema), addSurahToUserPlaylist)
    .delete(auth, validation(RemoveSurahSchema), removeSurahToUserPlaylist)
    .get(auth, getUserPlaylist)

router.route('/progress')
    .put(auth, validation(progressSchema), saveUserProgress)
    .get(auth, getUserProgress)

export const userRouter = router