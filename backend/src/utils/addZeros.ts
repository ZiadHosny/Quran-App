export const addZeros = ({ number, numOfZeros }: { number: number, numOfZeros: number }) => {
    return number.toString().padStart(numOfZeros, '0');
}