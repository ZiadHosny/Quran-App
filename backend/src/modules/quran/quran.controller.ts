import { Request, Response } from "express"
import * as quran from "../../data/quran.js";
import { quranReciters } from "../../data/quranReciters.js";

export const getQuranReciterSuwar = (req: Request, res: Response) => {
    const { id } = req.params

    switch (id) {
        case 'mahmoudkhalilAlHussary':
            res.json(quran.mahmoudkhalilAlHussary);
        case 'misharyBinRashidAlafasy':
            res.json(quran.misharyBinRashidAlafasy);
        case 'abdulbasitmujawwad':
            res.json(quran.abdulbasitmujawwad);
        case 'abdulbasitmurattal':
            res.json(quran.abdulbasitmurattal)
    }
}

export const getQuranReciters = (_: Request, res: Response) => {
    res.json(quranReciters);
}