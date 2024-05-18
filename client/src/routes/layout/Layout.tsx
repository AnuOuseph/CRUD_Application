import { Outlet } from 'react-router-dom' 
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"
import { useState } from 'react';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div style={{backgroundColor:'#e5e7eb'}}>
      <div style={{display:'flex'}}>
        <div>
          <SideBar isOpen={isSidebarOpen} onClose={closeSidebar}/>
        </div>
        <div style={{flex:10, backgroundColor:'#e5e7eb'}}>
          <NavBar onMenuClick={toggleSidebar}/>
          <div className="flex-1 p-4" style={{ height: 'calc(100vh - 64px)' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
