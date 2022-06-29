import { useState } from 'react'
import {BsPlusLg} from 'react-icons/bs'
import { AddCourse } from '../addCourse/AddCourse'
import './Courses.css'
import { useSelector } from 'react-redux/es/exports'
import { CourseCard } from '../courseCard/CourseCard'

export const Courses = () => {
    const [showCourse, setShowCourse] = useState(false)

    const courses = useSelector(state => state.courses)

    return (
        <div className="courses">
        <div className="courses-header">
                <h1 className="course-title">Courses</h1>
                <button className="add-bt" onClick={() => {setShowCourse(true)}}><BsPlusLg id='bt-icon'/>Add Course</button>
        </div>
        <div className="courses-info">
            {
                courses.map(course => <CourseCard key={ course.id } data={ course }/>)
            }
        </div>
        {showCourse && <AddCourse setShowCourse={ setShowCourse }/>} 
</div>
    )
  }