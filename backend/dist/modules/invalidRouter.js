import * as express from "express";
import { AppError } from "../utils/AppError.js";
const router = express.Router();
router.use((req, _, next) => {
    next(new AppError("invalid Url - can't access this End Point " + req.originalUrl, 404));
});
export const invalidRouter = router;
