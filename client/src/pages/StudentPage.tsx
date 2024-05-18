import { useState } from "react";
import DataTable from "../modules/student/components/DataTable"
import CreateModal from "../modules/student/components/CreateModal";

const StudentPage: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div style={{padding:"30px 30px"}}>
      <div className="py-5 flex justify-between items-center">
        <p className="text-2xl md:text-3xl font-medium">Students</p>
        <div className="flex justify-center items-center">
            <input className="md:px-4 px-2 py-1 rounded-md" type="text" placeholder="Search..."/>
            <button className="text-white px-2 md:px-4 py-2 uppercase mx-2 rounded-md font-medium" style={{backgroundColor:'#22c55e'}} onClick={openModal}> <span className="md:hidden block text-sm">Add </span> <span className="hidden md:block text-sm"> Add New Student</span></button>
            <CreateModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add New Student" />
        </div>
      </div>
      <div className="py-5">
        <DataTable/>
      </div>
    </div>
  )
}

export default StudentPage
