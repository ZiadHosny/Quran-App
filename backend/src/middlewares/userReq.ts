import { NextFunction, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { catchAsyncError } from '../utils/catchAsyncError.js'
import { AuthRequest } from '../utils/types.js'
import { UserModel } from '../models/user.model.js'

interface JwtUser extends JwtPayload {
    name?: string,
    email?: string,
    picture?: string,
    locale?: string,
}

export const userReq = catchAsyncError(async (req: AuthRequest, _: Response, next: NextFunction) => {
    const authorization = req.header('authorization')?.split('Bearer ')[1]

    if (authorization) {
        try {
            const userAuth = jwt.decode(authorization) as JwtUser
            const id = userAuth?.sub

            if (id) {
                let user = await UserModel.findOne({ userId: id })
                if (user) {
                    req.user = user
                }
            }
            next()
        }
        catch (err) {
            console.error(err);
            return next()
        }
    }
    else {
        return next()
    }
})

