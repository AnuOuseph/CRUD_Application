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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const StudentModel_1 = require("../models/StudentModel");
class StudentService {
    static getStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield StudentModel_1.Student.find();
        });
    }
    static createStudent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = new StudentModel_1.Student(data);
            return yield student.save();
        });
    }
    static updateStudent(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield StudentModel_1.Student.findByIdAndUpdate(id, data, { new: true }).exec();
        });
    }
    static deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield StudentModel_1.Student.findByIdAndDelete(id).exec();
        });
    }
}
exports.StudentService = StudentService;
