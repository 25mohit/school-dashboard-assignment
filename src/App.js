import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Sidebar } from './component/sidebar/Sidebar';
import { Students } from './component/students/Students';
import { Exams, Home, Live, Notice, Notification, Results } from './component/home/Home';
import { Profile } from './component/profile/Profile';
import { Courses } from './component/courses/Courses'

function App() {
  return (
    <div className="App">
      <Router>
        <div className='sidebar-app'><Sidebar /></div>
        <Routes>
          <Route path='/' exact element={<div className='home-app'><Home /></div>}/>
          <Route path='/app' exact element={<div className='home-app'><Home /></div>}/>
          <Route path='/home' exact element={<div className='home-app'><Home /></div>}/>
          <Route path='/courses' exact element={<div className='home-app'><Courses /></div>}/>
          <Route path='/exams' exact element={<div className='home-app'><Exams /></div>}/>
          <Route path='/results' exact element={<div className='home-app'><Results /></div>}/>
          <Route path='/notice-board' exact element={<div className='home-app'><Notice /></div>}/>
          <Route path='/live-classes' exact element={<div className='home-app'><Live /></div>}/>
          <Route path='/notifications' exact element={<div className='home-app'><Notification /></div>}/>
          <Route path='/students' exact element={<div className='home-app'><Students /></div>}/>
          <Route path='/profile' exact element={<div className='home-app'><Profile /></div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
