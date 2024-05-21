"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    enrollNo: { type: String, required: true },
    date: { type: Date, required: true },
});
exports.Student = (0, mongoose_1.model)('Student', studentSchema);
