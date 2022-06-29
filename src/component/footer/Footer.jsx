import './Footer.css'
import { useSelector  } from 'react-redux/es/exports'
export const Footer = () => {
    const data = useSelector(state => state.students)
    return(
        <div className="footer-div">
                <p className="footer-text">Showing {data.length} of {data.length} entries</p>
        </div>  
    )
}