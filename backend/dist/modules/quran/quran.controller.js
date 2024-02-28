import { catchAsyncError } from '../../utils/catchAsyncError.js';
import { quran } from "../../data/quran.js";
import { quranReciters } from "../../data/quranReciters.js";
export const getAllSuwarQuranReciter = catchAsyncError((req, res) => {
    const paramId = req.params.id;
    const suwar = quran[paramId];
    res.send(suwar);
});
export const getQuranReciters = catchAsyncError((_, res) => {
    res.json(quranReciters);
});
