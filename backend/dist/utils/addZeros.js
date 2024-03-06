export const addZeros = ({ number, numOfZeros }) => {
    return number.toString().padStart(numOfZeros, '0');
};
