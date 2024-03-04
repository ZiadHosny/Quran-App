import express from "express";

import { addSurahToUserPlaylist, getUserPlaylist, getUserProgress, removeSurahToUserPlaylist, saveUserProgress } from "./userRouter.controller.js";
import { auth } from "../../middlewares/auth.js";

const Router = express.Router()

Router.put('/playlist', auth, addSurahToUserPlaylist)
Router.delete('/playlist', auth, removeSurahToUserPlaylist)
Router.get('/playlist', auth, getUserPlaylist)
Router.put('/progress', auth, saveUserProgress)
Router.get('/progress', auth, getUserProgress)

export const userRouter = Router