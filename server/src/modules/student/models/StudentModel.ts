import { Schema, model, Document } from 'mongoose';
import { IStudent } from '../interfaces/StudentInterface';

interface StudentDocument extends IStudent, Document {}

const studentSchema = new Schema<StudentDocument>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  enrollNo: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const Student = model<StudentDocument>('Student', studentSchema);