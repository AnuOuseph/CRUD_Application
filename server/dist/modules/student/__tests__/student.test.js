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
exports.studentData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../../index"));
const request = (0, supertest_1.default)(index_1.default);
let mongoServer;
let server;
let studentId;
exports.studentData = {
    name: 'Anu Ouseph',
    email: 'anu.ouseph@gmail.com',
    phone: '9675445678',
    enrollNo: 'X345W987543',
    date: "2024-05-21T14:11:36.392Z",
};
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    jest.setTimeout(30000);
    mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    yield mongoose_1.default.connect(uri);
    server = index_1.default.listen(process.env.PORT || 5000);
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.disconnect();
    if (mongoServer) {
        yield mongoServer.stop();
    }
    if (server) {
        server.close();
    }
}));
describe('student', () => {
    describe('create new student', () => {
        it('should return new student', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.post('/').send(exports.studentData);
            expect(res.status).toBe(200);
            expect(res.body.data).toEqual({
                _id: expect.any(String),
                name: 'Anu Ouseph',
                email: 'anu.ouseph@gmail.com',
                phone: '9675445678',
                enrollNo: 'X345W987543',
                date: "2024-05-21T14:11:36.392Z",
                __v: 0
            });
            studentId = res.body.data._id;
        }));
        it('should return 400 for invalid request', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.post('/').send({
                name: '',
                email: 'inavlid email',
                phone: '8696723456'
            });
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('name', 'BadRequestError');
        }));
    });
    describe('get students', () => {
        it('should return list of students', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get('/');
            expect(res.status).toBe(200);
            expect(res.body.data).toBeInstanceOf(Array);
            expect(res.body.data.length).toBeGreaterThan(0);
        }));
    });
    describe('update student', () => {
        it('should return updated student data', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.put(`/${studentId}`).send({
                name: 'anchu ouseph',
            });
            expect(res.status).toBe(200);
            expect(res.body.data).toHaveProperty('name', 'anchu ouseph');
        }));
        it('should return 404 for updating non existent student', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.put('/60e3b5f65b4d4b001c7e0a3d').send({
                name: 'anu ouseph',
            });
            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('name', 'NotFoundError');
        }));
    });
    describe('delete student', () => {
        it('should delete student', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.delete(`/${studentId}`);
            expect(res.status).toBe(200);
        }));
        it('should return 404 for deleting non existent student', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.delete('/60e3b5f65b4d4b001c7e0a3d');
            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('name', 'NotFoundError');
        }));
    });
});
