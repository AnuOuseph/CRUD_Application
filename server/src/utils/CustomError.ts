class CustomError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }

    public getErrorResponse() {
        return {
            name: this.name,
            message: this.message,
            statusCode: this.statusCode,
        };
    }
}

export default CustomError;
