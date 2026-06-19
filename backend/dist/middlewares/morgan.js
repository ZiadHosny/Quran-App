"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganMiddleware = void 0;
const chalk_1 = __importDefault(require("chalk"));
const morgan_1 = __importDefault(require("morgan"));
exports.morganMiddleware = (0, morgan_1.default)(function (tokens, req, res) {
    return [
        '\n',
        chalk_1.default.hex('#ff4757').bold('🧑🏻‍💻 Request --> '),
        chalk_1.default.hex('#34ace0').bold(tokens.method(req, res)),
        chalk_1.default.hex('#ffb142').bold(tokens.status(req, res)),
        chalk_1.default.hex('#ff5252').bold(tokens.url(req, res)),
        chalk_1.default.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        // chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
        // chalk.yellow(tokens['remote-addr'](req, res)),
        // chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
        chalk_1.default.hex('#1e90ff')(tokens['user-agent'](req, res)),
        '\n',
    ].join(' ');
});
