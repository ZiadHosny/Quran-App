"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const catchAsyncError_1 = require("../utils/catchAsyncError");
const AppError_1 = require("../utils/AppError");
const user_model_1 = require("../models/user.model");
exports.auth = (0, catchAsyncError_1.catchAsyncError)(async (req, _, next) => {
    const authorization = req.header('authorization')?.split('Bearer ')[1];
    if (authorization) {
        try {
            const userAuth = jsonwebtoken_1.default.decode(authorization);
            const id = userAuth?.sub;
            if (id) {
                let user = await user_model_1.UserModel.findOne({ userId: id });
                if (!user) {
                    user = await user_model_1.UserModel.create({
                        userId: id,
                        name: userAuth?.name,
                        email: userAuth?.email,
                        picture: userAuth?.picture,
                        locale: userAuth?.locale,
                    });
                }
                await user_model_1.UserModel.updateOne({ userId: id }, {
                    name: userAuth.name,
                    email: userAuth.email,
                    picture: userAuth.picture,
                    locale: userAuth.locale,
                });
                req.user = user;
            }
            else {
                return next(new AppError_1.AppError('Not authorized', 404));
            }
            next();
        }
        catch (err) {
            console.error(err);
            return next(new AppError_1.AppError('Not authorized, token failed', 401));
        }
    }
    else {
        return next(new AppError_1.AppError('Not authorized, no token', 401));
    }
});
