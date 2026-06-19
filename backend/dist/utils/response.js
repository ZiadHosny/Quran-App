"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = ({ res, status, message, page, data, }) => {
    const response = { message, data };
    const sendedData = page ? { ...response, page } : response;
    return res.status(status).send(sendedData);
};
exports.sendResponse = sendResponse;
