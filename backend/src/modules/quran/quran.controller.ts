import { Request, Response } from "express"
import { catchAsyncError } from '../../utils/catchAsyncError.js'
import { getAllQuran } from "../../data/quran.js";
import { QURAN_RECITERS, QURAN_RECITERS_ISLAMWAY } from "../../utils/constants.js";

export const getAllSuwarQuranReciter = catchAsyncError((req: Request, res: Response) => {
    const paramId = req.params.id
    
    const suwar = getAllQuran()[paramId]

    res.send(suwar)
})

export const getQuranReciters = catchAsyncError((_: Request, res: Response) => {
    res.json([...QURAN_RECITERS_ISLAMWAY, ...QURAN_RECITERS]);
})