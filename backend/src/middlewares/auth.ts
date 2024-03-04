import { NextFunction, Response } from 'express'
import jwt from 'jsonwebtoken'
import { catchAsyncError } from '../utils/catchAsyncError.js'
import { AppError } from '../utils/AppError.js'
import { AuthRequest } from '../utils/types.js'
import { UserModel } from '../models/user.model.js'

export const auth = catchAsyncError(async (req: AuthRequest, _: Response, next: NextFunction) => {
    const token = req.header('token')
    if (token) {
        try {
            const user = jwt.decode(token)
            const id = user?.sub
            if (id) {
                let user = await UserModel.findOne({ userId: id })
                if (!user) {
                    user = await UserModel.create({ userId: id })
                }
                req.user = user
            } else {
                return next(new AppError('Not authorized', 404))
            }
            next()
        }
        catch (err) {
            console.error(err);
            return next(new AppError('Not authorized, token failed', 401))
        }
    }
    else {
        return next(new AppError('Not authorized, no token', 401))
    }
})

