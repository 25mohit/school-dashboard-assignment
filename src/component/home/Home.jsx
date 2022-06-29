import './Home.css'
import {BsArrowDownRightSquareFill} from 'react-icons/bs'

export const Home = () => {
  return (
    <div className='dummy-page'>
       <div className="container">
        <h1 className="head-home">Welcome to this School Management App</h1>
            <li className="rules">You can add Students data with their Name, Class and Score.</li>
            <li className="rules">After adding student data you can Edit or Delete specific student data based on your choice.</li>
            <li className="rules">You can create Course as mush as you can by entring Course Title, Description, Faculty Name, Start and End Date.</li>
            <li className="rules">You can also Delete previously created course.</li>
            <li className="rules">You can update your Personal Profile too.</li>
            <li className="rules-1">Click on <BsArrowDownRightSquareFill id='arrow-icon-m'/> for all <span id='span-bold'>Features.</span></li>
       </div>
    </div>
  )
}
export const Exams = () => {
  return (
    <div className='dummy-page'>
        <h1 className='dummy-text'> Exams </h1>
    </div>
  )
}
export const Results = () => {
  return (
    <div className='dummy-page'>
        <h1 className='dummy-text'> Results </h1>
    </div>
  )
}
export const Notice = () => {
  return (
    <div className='dummy-page'>
        <h1 className='dummy-text'> Notice-Board </h1>
    </div>
  )
}
export const Live = () => {
  return (
    <div className='dummy-page'>
        <h1 className='dummy-text'> Live-Classes  </h1>
    </div>
  )
}
export const Notification = () => {
  return (
    <div className='dummy-page'>
        <h1 className='dummy-text'> Notifications </h1>
    </div>
  )
}
