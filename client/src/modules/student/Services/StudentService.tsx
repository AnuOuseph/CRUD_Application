import axios, { AxiosResponse } from 'axios';
import { IStudent } from '../types/StudentTypes';

interface IStudentResponse {
  data: IStudent[];
}

axios.defaults.baseURL = 'https://student-list-application-bhcu.onrender.com';

export const getStudents = async (): Promise<IStudent[]> => {
  const response: AxiosResponse<IStudentResponse> = await axios.get('/');
  return response?.data?.data;
};

export const addStudent = async (student: IStudent): Promise<IStudent> => {
  const response = await axios.post<IStudent>('/', student);
  return response.data;
};

export const updateStudent = async (student: IStudent): Promise<IStudent> => {
  const response = await axios.put<IStudent>(`/${student._id}`, student);
  return response.data;
};

export const deleteStudent = async (studentId: string): Promise<void> => {
  const response = await axios.delete(`/${studentId}`);
  return response.data;
};