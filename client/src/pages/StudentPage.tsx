import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DataTable from "../modules/student/components/DataTable"
import CreateModal from "../modules/student/components/CreateModal";
import { getStudents } from "../modules/student/Services/StudentService";
import { IStudent } from "../modules/student/types/StudentTypes";

const StudentPage: React.FC = () => {
  // State and function for handling student list
  const [students, setStudents] = useState<IStudent[]>([]);
  const [loading, setLoading] = useState(false)

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const studentsData = await getStudents();
      setStudents(studentsData);
      setLoading(false)
    } catch (error) {
      toast.error("Error fetching Students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // State and functions for handling modals
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
          <CreateModal isOpen={modalIsOpen} onRequestClose={closeModal} refreshStudents={fetchStudents} contentLabel="Add New Student" />
        </div>
      </div>
      <div className="py-5">
        <DataTable students={students} fetchStudents={fetchStudents} loading={loading}/>
      </div>
    </div>
  )
}

export default StudentPage
