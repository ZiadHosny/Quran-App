"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayTime = void 0;
const delayTime = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.delayTime = delayTime;
