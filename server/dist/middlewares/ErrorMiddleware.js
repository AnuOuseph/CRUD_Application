"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const ErrorHandler = (err, req, res, next) => {
    if (err instanceof CustomError_1.default) {
        const errorResponse = err.getErrorResponse();
        res.status(err.statusCode).json(errorResponse);
    }
    else {
        console.error(`Unexpected Error: ${err.message}`);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.default = ErrorHandler;
