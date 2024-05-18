import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import UpdateModal from "./UpdateModal";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const DataTable = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openDeleteModal = () => {
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
                {/* {currentItems.map((item)=>(       */}
                    <tr className="bg-white text-xs md:text-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-2 font-medium text-gray-700 capitalize flex items-center justify-start"><div className="md:w-10 md:h-10 w-6 h-6 rounded-full bg-gray-300 flex text-gray-400 items-center justify-center mx-2" style={{fontSize:'5px'}}>100x100</div> anu</td>
                        <td className="px-6 py-2 text-gray-700 ellipsis">anuouseph04@gmai.com</td>
                        <td className="px-6 py-2 text-gray-700 hidden md:table-cell">9526831802</td>
                        <td className="px-6 py-2 text-gray-700 hidden md:table-cell">1001</td>
                        <td className="px-6 py-2 text-gray-700 hidden md:table-cell">13/02/2024</td>
                        <td className="px-6 py-2 text-gray-700">
                        <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            <button onClick={openModal} className='mx-2'><FontAwesomeIcon icon={faPenToSquare} style={{color:"#2266ec"}} /></button>
                            <UpdateModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Edit Student" />
                            <button onClick={openDeleteModal} className='mx-2'><FontAwesomeIcon icon={faTrashCan} style={{color:"#e13e3e"}} /></button>
                            <DeleteModal isOpen={deleteModalIsOpen} onRequestClose={closeDeleteModal} contentLabel="Are you sure to delete this student?" />
                        </a>
                        </td>
                    </tr>
                {/* ))} */}
            </tbody>
        </table>
    </div>
  )
}
export default DataTable
