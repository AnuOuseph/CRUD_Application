"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const Database_1 = __importDefault(require("./config/Database"));
const StudentRoute_1 = __importDefault(require("./modules/student/routes/StudentRoute"));
const ErrorMiddleware_1 = __importDefault(require("./middlewares/ErrorMiddleware"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routing Middlewares
app.use('/', StudentRoute_1.default);
// ErrorHandling Middleware
app.use(ErrorMiddleware_1.default);
// Export the app for testing
exports.default = app;
// Separate logic for starting server
if (require.main === module) {
    const Server = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, Database_1.default)(process.env.MONGO_URI);
            const port = process.env.PORT || 3000;
            app.listen(port, () => {
                console.log(`Server connected on port ${port}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
    Server();
}
