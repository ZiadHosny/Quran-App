import jwt from 'jsonwebtoken';
import { catchAsyncError } from '../utils/catchAsyncError.js';
import { UserModel } from '../models/user.model.js';
export const userReq = catchAsyncError(async (req, _, next) => {
    const authorization = req.header('authorization')?.split('Bearer ')[1];
    if (authorization) {
        try {
            const userAuth = jwt.decode(authorization);
            const id = userAuth?.sub;
            if (id) {
                let user = await UserModel.findOne({ userId: id });
                if (user) {
                    req.user = user;
                }
            }
            next();
        }
        catch (err) {
            console.error(err);
            return next();
        }
    }
    else {
        return next();
    }
});
