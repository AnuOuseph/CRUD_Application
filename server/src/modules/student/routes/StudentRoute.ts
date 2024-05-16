import { Router } from 'express';
import { createNewStudent, deleteStudent, getAllStudents, updateStudent } from '../controllers/StudentController';

const StudentRoutes = Router();

StudentRoutes.get('/', getAllStudents);
StudentRoutes.post('/', createNewStudent);
StudentRoutes.put('/:id', updateStudent);
StudentRoutes.delete('/:id', deleteStudent);

export default StudentRoutes;
