import React from 'react';

const SideBar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar for larger devices */}
      <div className="hidden md:block w-auto sticky h-full top-0" style={{ height: "100vh", background: 'linear-gradient(to right, #2040b0, #8834e4)' }}>
        <div className="pt-2 px-4 relative h-full">
          <div className='px-4 py-3 my-3 flex items-center'>
            <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eefcf3' }}>
              <p className="text-gray-300" style={{ fontSize: '10px' }}>100x100</p>
            </div>
            <div className="px-3">
              <p className="text-lg font-medium line-height-0 text-white">Yellow Owl</p>
              <p className="text-sm" style={{ color: '#eefcf3' }}>Admin</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar for smaller devices */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={onClose} >
          <div className="w-64 h-full" style={{ height: "100vh", background: 'linear-gradient(to right, #2040b0, #8834e4)' }} onClick={(e) => e.stopPropagation()}>
            <div className="pt-2 px-4 relative h-full">
              <div className='px-4 py-3 my-3 flex items-center'>
                <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eefcf3' }}>
                  <p className="text-gray-300" style={{ fontSize: '10px' }}>100x100</p>
                </div>
                <div className="px-3">
                  <p className="text-lg font-medium line-height-0 text-white">Yellow Owl</p>
                  <p className="text-sm" style={{ color: '#eefcf3' }}>Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
