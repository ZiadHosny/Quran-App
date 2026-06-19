"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addZeros = void 0;
const addZeros = ({ number, numOfZeros, }) => {
    return number.toString().padStart(numOfZeros, '0');
};
exports.addZeros = addZeros;
