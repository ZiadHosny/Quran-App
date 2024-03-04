import { Request, Response } from "express"
import { catchAsyncError } from '../../utils/catchAsyncError.js'
import { getAllQuran } from "../../data/quran.js";
import { QURAN_RECITERS, QURAN_RECITERS_ISLAMWAY } from "../../utils/constants.js";
import { sendResponse } from "../../utils/response.js";
import { Surah } from "../../utils/types.js";

export const getAllSuwarQuranReciter = catchAsyncError(async (req: Request, res: Response) => {
    const paramId = req.params.id

    let suwar: Surah[] = []
    // if (paramId === 'abdurahmanmesaad') {
    //     suwar = getAbdurahmanmesaad()
    // } else {
    suwar = getAllQuran()[paramId]
    // }
    ''
    return sendResponse({
        res,
        message: 'get ALl Suwar successfully ',
        status: 200,
        data: suwar
    })
})

export const getQuranReciters = catchAsyncError(async (_: Request, res: Response) => {
    return sendResponse({
        res,
        message: 'get Quran Reciters successfully ',
        status: 200,
        data: [...QURAN_RECITERS_ISLAMWAY, ...QURAN_RECITERS]
    })
})