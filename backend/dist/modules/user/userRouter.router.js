"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userRouter_controller_1 = require("./userRouter.controller");
const auth_1 = require("../../middlewares/auth");
const validation_1 = require("../../middlewares/validation");
const userRouter_schema_1 = require("./userRouter.schema");
const router = express_1.default.Router();
router
    .route('/playlist')
    .put(auth_1.auth, (0, validation_1.validation)(userRouter_schema_1.SurahSchema), userRouter_controller_1.addSurahToUserPlaylist)
    .delete(auth_1.auth, (0, validation_1.validation)(userRouter_schema_1.RemoveSurahSchema), userRouter_controller_1.removeSurahToUserPlaylist)
    .get(auth_1.auth, userRouter_controller_1.getUserPlaylist);
router
    .route('/progress')
    .put(auth_1.auth, (0, validation_1.validation)(userRouter_schema_1.progressSchema), userRouter_controller_1.saveUserProgress)
    .get(auth_1.auth, userRouter_controller_1.getUserProgress);
exports.userRouter = router;
