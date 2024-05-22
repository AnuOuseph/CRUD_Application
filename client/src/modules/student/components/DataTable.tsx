import { useState } from "react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import { IStudent } from "../types/StudentTypes";

interface DataTableProps {
  fetchStudents: () => void;
  students: IStudent[];
  loading: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ students, fetchStudents, loading }) => { 
 //State and functions for handling modals
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
      {loading? (<>
        <div role="status" className="flex justify-center pt-5">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </>) : (<>
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
              <td className="px-6 py-2 text-gray-700 hidden md:table-cell">{item?.date ? new Date(item.date).toLocaleDateString() : ''}</td>
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
      </>)}
      <UpdateModal isOpen={modalIsOpen} onRequestClose={closeModal} student={selectedStudent} fetchStudents={fetchStudents} contentLabel="Edit Student" />
      <DeleteModal isOpen={deleteModalIsOpen} onRequestClose={closeDeleteModal} student={selectedStudent || null} fetchStudents={fetchStudents} contentLabel="Are you sure to delete this student?" />
    </div>
  )
}
export default DataTable;
