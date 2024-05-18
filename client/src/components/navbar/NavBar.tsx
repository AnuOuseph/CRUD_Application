import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavBarProps {
  onMenuClick: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ onMenuClick }) => {
    return (
      <>
        <div className="w-full border-none h-16 flex items-center sticky top-0 z-49" style={{background: 'linear-gradient(to right, #4ade80, #3b83f5)'}}>
          <button className="md:hidden mx-5" onClick={onMenuClick}><FontAwesomeIcon icon={faBars} style={{color: '#eefcf3'}}/></button>  
          <div className="flex items-center">
            <p className='text-xl md:mx-5 font-medium' style={{color: '#eefcf3'}}>Students</p>
          </div>
        </div>
      </>
    )
}
  
export default NavBar