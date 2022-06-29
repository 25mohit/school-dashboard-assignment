import './Students.css'
import { BsPlusLg } from 'react-icons/bs'
import { AddStudents } from '../addStudents/AddStudents'
import { useState } from 'react'
import { StudentsTable } from '../studentsTable/StudentsTable'
import { Footer } from '../footer/Footer'

export const Students = () => {
    const [addStudentModal, setAddStudentModal] = useState(false)
  
  return (
    <div className='students-div'>
            <div className="student-head">
                    <h2 className="student-heading">Students</h2>
                    <button className="add-bt"  onClick={() => {setAddStudentModal(true)}}><BsPlusLg id='bt-icon'/>ADD</button>
                    {addStudentModal && <AddStudents setAddStudentModal={ setAddStudentModal }/> }
            </div>
            <div className="students-data">
                <StudentsTable />
            </div>
            <div className="footer">
                <Footer />
            </div>
    </div>
  )
}
