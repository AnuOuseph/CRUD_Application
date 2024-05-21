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
exports.deleteStudent = exports.updateStudent = exports.createNewStudent = exports.getAllStudents = void 0;
const StudentService_1 = require("../services/StudentService");
const NotFoundError_1 = require("../../../utils/NotFoundError");
const BadRequestError_1 = __importDefault(require("../../../utils/BadRequestError"));
const getAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Students = yield StudentService_1.StudentService.getStudents();
        return res.status(200).json({ message: "Succesfully fetched data", data: Students });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllStudents = getAllStudents;
const createNewStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (!data.name || !data.email || !data.phone || !data.enrollNo || !data.date) {
            throw new BadRequestError_1.default('All fields are required');
        }
        const Student = yield StudentService_1.StudentService.createStudent(data);
        return res.status(200).json({ message: "Student Created Succesfully", data: Student });
    }
    catch (error) {
        next(error);
    }
});
exports.createNewStudent = createNewStudent;
const updateStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const Student = yield StudentService_1.StudentService.updateStudent(id, data);
        if (!Student) {
            throw new NotFoundError_1.NotFoundError('Student not found');
        }
        return res.status(200).json({ message: "Fetch Successful", data: Student });
    }
    catch (error) {
        next(error);
    }
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const Student = yield StudentService_1.StudentService.deleteStudent(id);
        if (!Student) {
            throw new NotFoundError_1.NotFoundError('Student not found');
        }
        return res.status(200).json({ message: "Student Deleted Successfully", data: Student });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteStudent = deleteStudent;
