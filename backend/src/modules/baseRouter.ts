import * as express from "express";

const router = express.Router()

router.get('/', (_, res: express.Response) => {
    res.send('Hello From Quran Api!')
})

export const baseRouter = router