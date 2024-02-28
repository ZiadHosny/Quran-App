import express from "express";
import { addSurahToUserPlaylist } from "./userRouter.controller.js";
import { auth } from "../../middlewares/auth.js";
const Router = express.Router();
Router.put('/playlist', auth, addSurahToUserPlaylist);
// Router.get('/', auth, getUserProgress)
export const userRouter = Router;
