import type { NextFunction, Request, Response } from 'express';
import type { AuthRequest } from './types';

export const catchAsyncError = (fn: Function) => {
  return (req: Request | AuthRequest, res: Response, next: NextFunction) => {
    Promise.resolve(
      fn(req, res, next).catch((err: any) => {
        console.log('error', err);
        next(err);
      }),
    );
  };
};
