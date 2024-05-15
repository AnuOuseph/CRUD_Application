import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  enrollNo: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const Student = model('Student', studentSchema);