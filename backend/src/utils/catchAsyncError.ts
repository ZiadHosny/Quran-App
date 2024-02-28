import { NextFunction, Request, Response } from "express"
import { AuthRequest } from "./types.js"

export const catchAsyncError = (fn: Function) => {
    return (req: Request | AuthRequest, res: Response, next: NextFunction) => {
        fn(req, res, next).catch((err: any) => {
            console.log('error', err)
            next(err)
        })
    }
}