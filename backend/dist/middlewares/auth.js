import jwt from 'jsonwebtoken';
import { catchAsyncError } from '../utils/catchAsyncError.js';
import { AppError } from '../utils/AppError.js';
import { UserModel } from '../models/user.model.js';
export const auth = catchAsyncError(async (req, _, next) => {
    // const token = req.header('token')
    const authorization = req.header('authorization')?.split('Bearer ')[1];
    if (authorization) {
        try {
            const userAuth = jwt.decode(authorization);
            const id = userAuth?.sub;
            if (id) {
                let user = await UserModel.findOne({ userId: id });
                if (!user) {
                    user = await UserModel.create({
                        userId: id,
                        name: userAuth?.name,
                        email: userAuth?.email,
                        picture: userAuth?.picture,
                        locale: userAuth?.locale,
                    });
                }
                await UserModel.updateOne({ userId: id }, {
                    name: userAuth.name,
                    email: userAuth.email,
                    picture: userAuth.picture,
                    locale: userAuth.locale,
                });
                req.user = user;
            }
            else {
                return next(new AppError('Not authorized', 404));
            }
            next();
        }
        catch (err) {
            console.error(err);
            return next(new AppError('Not authorized, token failed', 401));
        }
    }
    else {
        return next(new AppError('Not authorized, no token', 401));
    }
});
