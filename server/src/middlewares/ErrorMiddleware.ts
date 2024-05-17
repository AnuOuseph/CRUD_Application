import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';

const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof CustomError) {
        const errorResponse = err.getErrorResponse();
        res.status(err.statusCode).json(errorResponse);
    } else {
        console.error(`Unexpected Error: ${err.message}`);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default ErrorHandler;
