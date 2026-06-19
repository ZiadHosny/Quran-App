"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorMiddleware = void 0;
const getFromEnv_1 = require("../utils/getFromEnv");
const globalErrorMiddleware = (err, _, res, __) => {
    const { mode } = (0, getFromEnv_1.getFromEnv)();
    if (mode == 'dev') {
        devMode(err, res);
    }
    else {
        prodMode(err, res);
    }
};
exports.globalErrorMiddleware = globalErrorMiddleware;
const prodMode = (err, res) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({ err: err.message });
};
const devMode = (err, res) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({ err: err.message, stack: err.stack });
};
