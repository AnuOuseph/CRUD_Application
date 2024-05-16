import { Student } from '../models/StudentModel';
import { IStudent } from '../interfaces/StudentInterface';

export class StudentService {
    static async getStudents(): Promise<IStudent[]> {
        return await Student.find();
    }

    static async createStudent(data: IStudent): Promise<IStudent> {
        const student = new Student(data);
        return await student.save();
    }

    static async updateStudent(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
        return await Student.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    static async deleteStudent(id: string): Promise<IStudent | null> {
        return await Student.findByIdAndDelete(id).exec();
    }
}