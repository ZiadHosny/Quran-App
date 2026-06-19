"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const getFromEnv_1 = require("../utils/getFromEnv");
const log_1 = require("../utils/console/log");
const connectToMongoDb = async () => {
    const { databaseURL } = (0, getFromEnv_1.getFromEnv)();
    try {
        await mongoose_1.default.connect(databaseURL);
        (0, log_1.logSuccessMsg)(`Connect To Mongo DB Successfully`);
    }
    catch (err) {
        (0, log_1.logErrMsg)('Error when connect to Mongo DB');
        (0, log_1.logErrInfoMsg)(err);
    }
};
exports.connectToMongoDb = connectToMongoDb;
