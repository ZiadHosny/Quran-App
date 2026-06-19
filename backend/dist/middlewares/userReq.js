"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReq = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const catchAsyncError_1 = require("../utils/catchAsyncError");
const user_model_1 = require("../models/user.model");
exports.userReq = (0, catchAsyncError_1.catchAsyncError)(async (req, _, next) => {
    const authorization = req.header('authorization')?.split('Bearer ')[1];
    if (authorization) {
        try {
            const userAuth = jsonwebtoken_1.default.decode(authorization);
            const id = userAuth?.sub;
            if (id) {
                let user = await user_model_1.UserModel.findOne({ userId: id });
                if (user) {
                    req.user = user;
                }
            }
            next();
        }
        catch (err) {
            console.error(err);
            return next();
        }
    }
    else {
        return next();
    }
});
