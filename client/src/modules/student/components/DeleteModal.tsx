import React from 'react';
import Modal from 'react-modal';
import toast from "react-hot-toast";
import { deleteStudent } from '../Services/StudentService';
import { IStudent } from '../types/StudentTypes';


Modal.setAppElement('#root'); 
interface MyModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  student: IStudent | null;
  fetchStudents: () => void;
}

const DeleteModal: React.FC<MyModalProps> = ({ isOpen, onRequestClose, contentLabel, student, fetchStudents }) => {
  const handleDelete = async () => {
    if (student && student._id) {
      try {
        await deleteStudent(student._id);
        fetchStudents();
        onRequestClose();
        toast.success("Deleted Successfully")
      } catch (error) {
        toast.error("error creating")
      }
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
          width: '380px',
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
        <h2 className='font-semibold text-lg mb-3'>{contentLabel}</h2>
        <div className='w-[100%] flex items-center'>
            <button className='w-[50%] text-white my-1 mx-2 py-1 rounded' style={{backgroundColor:'#22c55e'}} onClick={handleDelete}>Delete</button>
            <button className='w-[50%] text-white my-1 mx-2 py-1 rounded' style={{backgroundColor:'#c55d22'}} onClick={onRequestClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
