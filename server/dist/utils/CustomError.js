"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
    getErrorResponse() {
        return {
            name: this.name,
            message: this.message,
            statusCode: this.statusCode,
        };
    }
}
exports.default = CustomError;
