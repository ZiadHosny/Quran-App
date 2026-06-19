"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMsg = exports.logBlueMsg = exports.logSuccessMsg = exports.logErrInfoMsg = exports.logErrMsg = void 0;
const chalk_1 = __importDefault(require("chalk"));
const log = console.log;
const line = '--------------------------------------------';
const logErrMsg = (message) => {
    log(chalk_1.default.red.bold(message));
    log(chalk_1.default.gray(line));
};
exports.logErrMsg = logErrMsg;
const logErrInfoMsg = (message) => {
    log(chalk_1.default.black.bgRed(message));
    log(chalk_1.default.gray(line));
};
exports.logErrInfoMsg = logErrInfoMsg;
const logSuccessMsg = (message) => {
    log(chalk_1.default.green.bold(message));
    log(chalk_1.default.gray(line));
};
exports.logSuccessMsg = logSuccessMsg;
const logBlueMsg = (message) => {
    log(chalk_1.default.blue.bold(message));
    log(chalk_1.default.gray(line));
};
exports.logBlueMsg = logBlueMsg;
const logMsg = (message) => {
    log(chalk_1.default.bold(message));
    log(chalk_1.default.gray(line));
};
exports.logMsg = logMsg;
