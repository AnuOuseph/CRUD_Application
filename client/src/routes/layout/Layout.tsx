import { useState } from 'react';
import { Outlet } from 'react-router-dom' 
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"

const Layout: React.FC = () => {
  //Handle sidebar functions on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  return (
    <div>
      <div style={{display:'flex'}}>
        <div>
          <SideBar isOpen={isSidebarOpen} onClose={closeSidebar}/>
        </div>
        <div style={{flex:10}}>
          <div style={{height: '16px'}}>
            <NavBar onMenuClick={toggleSidebar}/>
          </div>
          <div className="flex-1 p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
