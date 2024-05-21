import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import toast from "react-hot-toast";

import { IStudent } from '../types/StudentTypes';
import { updateStudent } from '../Services/StudentService';

Modal.setAppElement('#root');

interface MyModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  student: IStudent | null;
  fetchStudents: () => void;
}

const UpdateModal: React.FC<MyModalProps> = ({ isOpen, onRequestClose, contentLabel, student, fetchStudents }) => {
  const [updatedStudent, setUpdatedStudent] = useState<IStudent>({
    _id: '',
    name: '',
    email: '',
    phone: '',
    enrollNo: '',
    date: null,
  });
  
  //Set initial value of Date
  useEffect(() => {
    if (student) {
      setUpdatedStudent({
        ...student,
        date: typeof student.date === "string" ? new Date(student.date) : student.date,
      });
    }
  }, [student]);

  //Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  //Handle Date changes
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedStudent((prevStudent) => ({
      ...prevStudent,
      date: new Date(e.target.value),
    }));
  };

  //Handle Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateStudent(updatedStudent);
      fetchStudents();
      onRequestClose();
      toast.success("Updated Successfully")
    } catch (error) {
      toast.error("Error Updating Student")
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        overlay: {
          backgroundColor: '#9fa4ab',
          zIndex: 1000,
        },
        content: {
          width: '360px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          borderRadius: '8px', 
          padding: '20px', 
        },
      }}
    >
      <div className="p-5 bg-white rounded-xl">
        <h2 className='font-semibold text-xl mb-3'>{contentLabel}</h2>
        <div className='flex flex-col items-center justify-center my-4'>
          <input type="text" name="name" value={updatedStudent.name} onChange={handleChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Name'/>
          <input type="email" name="email" value={updatedStudent.email} onChange={handleChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Email' />
          <input type="text" name="phone" value={updatedStudent.phone} onChange={handleChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Phone' />
          <input type="text" name="enrollNo" value={updatedStudent.enrollNo} onChange={handleChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Enroll No' />
          <input type="date" name="date" value={updatedStudent.date !== null ? updatedStudent.date.toISOString().substr(0, 10) : ''} onChange={handleDateChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Date' />
        </div>
        <div className='w-[100%] flex flex-col items-center'>
          <button className='w-[80%] text-white my-1 py-1 rounded' style={{backgroundColor:'#22c55e'}} onClick={handleSubmit}>Update</button>
          <button className='w-[80%] text-white my-1 py-1 rounded' style={{backgroundColor:'#c55d22'}} onClick={onRequestClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateModal;
