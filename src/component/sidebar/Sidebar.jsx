import './Sidebar.css'
import {side_bar} from '../../assests/data/MOC_DATA'
import { SidebarMenu } from '../sidebarMenu/SidebarMenu'
import {Link} from 'react-router-dom'
import { BsBookmarkStar } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BsArrowDownRightSquareFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

export const Sidebar = ({showSidebar,setShowSidebar}) => {
  const userInfo = useSelector(state => state.profile)
  return (
    <div className='sidebar-div'>
      <div className="bars-icon" ><BsArrowDownRightSquareFill id='hide'  onClick={() =>setShowSidebar(!showSidebar)} /></div>
            <div className="sidebar-container">
                    <div className="head-div">
                        <div className="logo-div">
                            <BsBookmarkStar id='main-logo' />
                        </div>
                        <h2 className="logo-text">School Space</h2>
                    </div>
                    <div className="sidebar-menu">
                        {side_bar.map(items => <SidebarMenu 
                        key={items.id} 
                        data ={ items } 
                        />)}
                    </div>
                    <div className="sidebar-footer">
                      {userInfo && 
                          <div className="user-card">
                            <FaUserAlt id='user-icon'/>
                            <div className="email">
                              <p className="u-name">{userInfo.fName}</p>
                              <p className="u-email">{userInfo.fEmail}</p>
                            </div>
                          </div>}
                          <Link to='profile'><button className="profile-bt">PROFILE</button></Link>
                    </div>  
            </div>
    </div>
  )
}
