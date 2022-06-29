import './SidebarMenu.css'
import { NavLink } from 'react-router-dom'

export const SidebarMenu = ({ data,id }) => {
  return (
    <div className='sidebar-menu-items' id={id}>
      <NavLink to={ data.link } style={({isActive}) => {return{
          color:isActive?'#23A4D8':'',
          fontWeight:isActive?'600':'',
          background:isActive?'rgb(216, 244, 255)':'', 
          display:"flex",
          alignItems: 'center',
          padding: '7px 5px',
          boxSizing: 'border-box',
          margin: '5px 0',
          height:'100%',
          width: '100%',
          borderRadius:'15px'
         }}}>
            <p className="sidebar-menu-icon">{ data.icon }</p>
           <p className='sidebar-menu-text'>{ data.title }</p>
           </NavLink>
    </div>
  )
}
