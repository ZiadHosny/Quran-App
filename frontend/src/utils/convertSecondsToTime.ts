export const convertSecondsToTime = (duration: number): string => {

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor(duration % 3600 / 60);
    const seconds = Math.floor(duration % 3600 % 60);
    const finalHours = (hours < 10) ? "0" + hours : hours;
    const finalMinutes = (minutes < 10) ? "0" + minutes : minutes;
    const finalSeconds = (seconds < 10) ? "0" + seconds : seconds;

    if (Number(finalHours) > 0) {
        return finalHours + ":" + finalMinutes + ":" + finalSeconds
    }
    else {
        return finalMinutes + ":" + finalSeconds
    }
}