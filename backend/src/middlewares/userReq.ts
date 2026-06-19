import type { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import { catchAsyncError } from '../utils/catchAsyncError';
import type { AuthRequest } from '../utils/types';
import { UserModel } from '../models/user.model';

interface JwtUser extends JwtPayload {
  name?: string;
  email?: string;
  picture?: string;
  locale?: string;
}

export const userReq = catchAsyncError(
  async (req: AuthRequest, _: Response, next: NextFunction) => {
    const authorization = req.header('authorization')?.split('Bearer ')[1];

    if (authorization) {
      try {
        const userAuth = jwt.decode(authorization) as JwtUser;
        const id = userAuth?.sub;

        if (id) {
          let user = await UserModel.findOne({ userId: id });
          if (user) {
            req.user = user;
          }
        }
        next();
      } catch (err) {
        console.error(err);
        return next();
      }
    } else {
      return next();
    }
  },
);
