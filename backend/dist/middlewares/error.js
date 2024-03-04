import { getFromEnv } from "../utils/getFromEnv.js";
export const globalErrorMiddleware = (err, _, res, __) => {
    const { mode } = getFromEnv();
    if (mode == 'dev') {
        devMode(err, res);
    }
    else {
        prodMode(err, res);
    }
};
const prodMode = (err, res) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({ err: err.message });
};
const devMode = (err, res) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({ err: err.message, stack: err.stack });
};
