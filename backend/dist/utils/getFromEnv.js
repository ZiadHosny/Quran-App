"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const getFromEnv = () => {
    dotenv_1.default.config();
    const port = Number(process.env.PORT) || 3000;
    const mode = process.env.MODE;
    const databaseURL = process.env.DATABASE_URL || '';
    const publicKey = process.env.PUBLIC_KEY || '';
    const privateKey = process.env.PRIVATE_KEY || '';
    return {
        port,
        mode,
        databaseURL,
        publicKey,
        privateKey,
    };
};
exports.getFromEnv = getFromEnv;
