import CustomError from './CustomError';

class BadRequestError extends CustomError {
    constructor(message: string = 'Bad Request') {
        super(message, 400);
    }
}

export default BadRequestError;