"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const AppError_1 = require("../utils/AppError");
const validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: true });
        return error ? next(new AppError_1.AppError(error.message, 400)) : next();
    };
};
exports.validation = validation;
