"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsyncError = void 0;
const catchAsyncError = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next).catch((err) => {
            console.log('error', err);
            next(err);
        }));
    };
};
exports.catchAsyncError = catchAsyncError;
