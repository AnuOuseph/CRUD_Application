import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import UpdateModal from "./UpdateModal";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { IStudent } from "../types/StudentTypes";

interface DataTableProps {
  fetchStudents: () => void;
  students: IStudent[];
}

const DataTable: React.FC<DataTableProps> = ({ students, fetchStudents }) => { 
 
  const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const openModal = (student: IStudent) => {
    setSelectedStudent(student);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openDeleteModal = (student: IStudent) => {
    setSelectedStudent(student);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  return (
    <div>
      <table className="w-full shadow-md rounded-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-500 uppercase border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 ">
                Name
                </th>
                <th scope="col" className="px-6 py-3 ">
                Email
                </th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">
                Phone
                </th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">
                Enroll Number
                </th>
                <th scope="col" className="px-6 py-3 hidden md:table-cell">
                Date
                </th>
                <th scope="col" className="px-6 py-3 ">
                
                </th>
            </tr>
            </thead>
            <tbody>
                {students.map((item)=>(       
                    <tr key={item._id} className="bg-white text-xs md:text-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-2 font-medium text-gray-700 capitalize flex items-center justify-start"><div className="md:w-10 md:h-10 w-6 h-6 rounded-full bg-gray-300 flex text-gray-400 items-center justify-center mx-2" style={{fontSize:'5px'}}>100x100</div>{item?.name}</td>
                        <td className="px-6 py-2 text-gray-700 ellipsis">{item?.email}</td>
                        <td className="px-6 py-2 text-gray-700 hidden md:table-cell">{item?.phone}</td>
                        <td className="px-6 py-2 text-gray-700 hidden md:table-cell">{item?.enrollNo}</td>
                        <td className="px-6 py-2 text-gray-700 hidden md:table-cell">{new Date(item?.date).toLocaleDateString()}</td>
                        <td className="px-6 py-2 text-gray-700">
                        <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            <button onClick={() => openModal(item)} className='mx-2'><FontAwesomeIcon icon={faPenToSquare} style={{color:"#2266ec"}} /></button>
                            <button onClick={() => openDeleteModal(item)} className='mx-2'><FontAwesomeIcon icon={faTrashCan} style={{color:"#e13e3e"}} /></button>
                        </a>
                        </td>
                    </tr>
                 ))} 
            </tbody>
        </table>
        <UpdateModal isOpen={modalIsOpen} onRequestClose={closeModal} student={selectedStudent} fetchStudents={fetchStudents} contentLabel="Edit Student" />
        <DeleteModal isOpen={deleteModalIsOpen} onRequestClose={closeDeleteModal} student={selectedStudent || null} fetchStudents={fetchStudents} contentLabel="Are you sure to delete this student?" />
    </div>
  )
}
export default DataTable;
