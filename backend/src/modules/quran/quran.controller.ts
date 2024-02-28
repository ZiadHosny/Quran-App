import { Request, Response } from "express"
import { catchAsyncError } from '../../utils/catchAsyncError.js'
import { quran } from "../../data/quran.js";
import { quranReciters } from "../../data/quranReciters.js";

export const getAllSuwarQuranReciter = catchAsyncError((req: Request, res: Response) => {
    const paramId = req.params.id

    const suwar = quran[paramId]

    res.send(suwar)
})

export const getQuranReciters = catchAsyncError((_: Request, res: Response) => {
    res.json(quranReciters);
})