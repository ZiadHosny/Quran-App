import * as express from "express";
import { getFromEnv } from "../utils/getFromEnv.js";
const { mode } = getFromEnv();
const router = express.Router();
// if (mode === 'prod') {
//     const __dirname = path.resolve();
//     router.use(express.static(path.join(__dirname, '/frontend/build')));
//     router.get('*', (_: express.Request, res: express.Response) =>
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     );
// } else {
router.get('/', (_, res) => {
    res.send('Hello From Quran Api!');
});
export const baseRouter = router;
