import axios, { AxiosResponse } from 'axios';
import { IStudent } from '../types/StudentTypes';

interface IStudentResponse {
    data: IStudent[];
  }

export const getStudents = async (): Promise<IStudent[]> => {
  const response: AxiosResponse<IStudentResponse> = await axios.get('http://localhost:5000');
  return response?.data?.data;
};

export const addStudent = async (student: IStudent): Promise<IStudent> => {
  const response = await axios.post<IStudent>('http://localhost:5000', student);
  return response.data;
};

export const updateStudent = async (student: IStudent): Promise<IStudent> => {
  const response = await axios.put<IStudent>(`http://localhost:5000/${student._id}`, student);
  return response.data;
};

export const deleteStudent = async (studentId: string): Promise<void> => {
  const response = await axios.delete(`http://localhost:5000/${studentId}`);
  return response.data;
};