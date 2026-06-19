import express from 'express';

import {
  addSurahToUserPlaylist,
  getUserPlaylist,
  getUserProgress,
  removeSurahToUserPlaylist,
  saveUserProgress,
} from './userRouter.controller';
import { auth } from '../../middlewares/auth';
import { validation } from '../../middlewares/validation';
import {
  RemoveSurahSchema,
  SurahSchema,
  progressSchema,
} from './userRouter.schema';

const router = express.Router();

router
  .route('/playlist')
  .put(auth, validation(SurahSchema), addSurahToUserPlaylist)
  .delete(auth, validation(RemoveSurahSchema), removeSurahToUserPlaylist)
  .get(auth, getUserPlaylist);

router
  .route('/progress')
  .put(auth, validation(progressSchema), saveUserProgress)
  .get(auth, getUserProgress);

export const userRouter = router;
