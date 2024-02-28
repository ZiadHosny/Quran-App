import jwt from 'jsonwebtoken';
import { catchAsyncError } from '../utils/catchAsyncError.js';
import { AppError } from '../utils/AppError.js';
import { UserModel } from '../models/user.model.js';
export const auth = catchAsyncError(async (req, _, next) => {
    const authorization = req.header('authorization');
    const token = authorization?.split('Bearer ')[1];
    if (token) {
        try {
            const user = jwt.decode(token);
            const id = user?.sub;
            if (id) {
                req.userId = id;
            }
            else {
                return next(new AppError('Not authorized', 404));
            }
            req.user = await UserModel.find({ where: { userId: id } });
            // .select('-password');
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
