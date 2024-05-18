import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 
interface MyModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
}

const UpdateModal: React.FC<MyModalProps> = ({ isOpen, onRequestClose, contentLabel }) => {
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
            <input type="text" className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Name'/>
            <input type="email" className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Email' />
            <input type="text" className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Phone' />
            <input type="tel" className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Enroll No' />
            <input type="text" className='border rounded px-4 py-2 my-1 text-sm w-[100%]' placeholder='Date' />
        </div>
        <div className='w-[100%] flex flex-col items-center'>
            <button className='w-[80%] text-white my-1 py-1 rounded' style={{backgroundColor:'#22c55e'}} onClick={onRequestClose}>Update</button>
            <button className='w-[80%] text-white my-1 py-1 rounded' style={{backgroundColor:'#c55d22'}} onClick={onRequestClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateModal;
