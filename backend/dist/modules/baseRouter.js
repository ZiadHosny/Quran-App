"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRouter = void 0;
const express = __importStar(require("express"));
const getFromEnv_1 = require("../utils/getFromEnv");
const { mode } = (0, getFromEnv_1.getFromEnv)();
const router = express.Router();
// if (mode === 'prod') {
//     const __dirname = path.resolve();
//     router.use(express.static(path.join(__dirname, '/frontend/build')));
//     router.get('*', (_: express.Request, res: express.Response) =>
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     );
// } else {
router.get('/', (_, res) => {
    res.send('Hello From Quran Api!');
});
exports.baseRouter = router;
