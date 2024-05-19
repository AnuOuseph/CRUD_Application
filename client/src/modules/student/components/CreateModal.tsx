import React, { useState } from 'react';
import Modal from 'react-modal';
import toast from "react-hot-toast";
import { IStudent } from '../types/StudentTypes';
import { addStudent } from '../Services/StudentService';

Modal.setAppElement('#root'); 

interface MyModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  refreshStudents: () => void;
}

const CreateModal: React.FC<MyModalProps> = ({ isOpen, onRequestClose, contentLabel, refreshStudents }) => {
  const [student, setStudent] = useState<IStudent>({
    name: '',
    email: '',
    phone: '',
    enrollNo: 0,
    date: new Date()
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: name === 'enrollNo' ? Number(value) : value,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent((prevStudent) => ({
      ...prevStudent,
      date: new Date(e.target.value),
    }));
  };
  console.log(student)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await addStudent(student)
      console.log('Student added:', response);
      toast.success("Success")
      setStudent({
        name: '',
        email: '',
        phone: '',
        enrollNo: 0,
        date: new Date(),
      });
      refreshStudents(); 
      onRequestClose();
    } catch (error) {
      toast.error("error creating")
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
            <input type="text" name="name" value={student.name} onChange={handleChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Name'/>
            <input type="email" name="email" value={student.email} onChange={handleChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Email' />
            <input type="text" name="phone" value={student.phone} onChange={handleChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Phone' />
            <input type="number" name="enrollNo" value={student.enrollNo} onChange={handleChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Enroll No' />
            <input type="date" name="date" value={student.date.toISOString().substr(0, 10)} onChange={handleDateChange} className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Date' />
        </div>
        <div className='w-[100%] flex flex-col items-center'>
            <button className='w-[80%] text-white my-1 py-1 rounded' style={{backgroundColor:'#22c55e'}} onClick={handleSubmit}>Submit</button>
            <button className='w-[80%] text-white my-1 py-1 rounded' style={{backgroundColor:'#c55d22'}} onClick={onRequestClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateModal;
