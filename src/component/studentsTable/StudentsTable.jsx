import './StudentTable.css'
import { useSelector } from 'react-redux'
import { RiPencilLine } from 'react-icons/ri'
import { FiTrash } from 'react-icons/fi'
import { RemoveStudent } from '../removeStudent/RemoveStudent'
import { useState } from 'react'
import { EditStudent } from '../editStudent/EditStudent'

export const StudentsTable = () => {
    const data = useSelector(state => state.students)
    const [deleteStudent, setDeleteStudent] = useState(false)
    const [editStudent, setEditStudent] = useState(false)
    const [currentId, setCurrentId] = useState()
    const [currentSData, setCurrentSData] = useState({name:'', class:''})
    const [editCurrentData, setEditCurrentData] = useState({id:'',name:'', class:'', score:''})

  const showModal =(id, sName, sClass) => {
    setDeleteStudent(true)
    setCurrentId(id)
    setCurrentSData({ name:sName, class:sClass})
  }
  const editData = (id, sName, sScore, sClass ) => {
    setEditStudent(true)
    setEditCurrentData({ id:id,name:sName,  score:sScore, class:sClass})
  }

  return (
    <div className='students-table'>
            <table>
                    <tr id='table-head'>
                        <th>No.</th>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Result</th>
                        <th>Score</th>
                        <th>Grade</th>
                    </tr>
                    <tbody>
                        {data.map((student, index) => <tr key={student.id} className='map-tr'>
                            <td>{ index+1 }</td>
                            <td>{ student.sName }</td>
                            <td>{ student.sClass }</td>
                            <td><p className="status" id={student.sScore<=31? "Fail":'Passed' }>{student.sScore<=31 ? "Fail":'Passed' }</p></td>
                            <td>{ student.sScore }/ 100</td>
                            <td className='table-icons'>
                                <td id={(student.sScore>31 && student.sScore<=75 && "Average")||(student.sScore<=31 && "Poor") || (student.sScore>=76 && "Excellent")}>
                                  {(student.sScore>31 && student.sScore<=75 && "Average")||(student.sScore<=31 && "Fail") || (student.sScore>=76 && "Excellent")}
                                  </td>
                                <div className="icons">
                                <RiPencilLine className='table-icon' onClick={() => {editData(student.id, student.sName,student.sScore, student.sClass)}}/>
                                <FiTrash  className='table-icon' onClick={ () => {showModal(student.id, student.sName, student.sClass)} }/>

                                </div>
                            </td>
                            { deleteStudent && <RemoveStudent setDeleteStudent={setDeleteStudent} id={ currentId } currentSData={ currentSData }/>}
                            { editStudent && <EditStudent setEditStudent={setEditStudent} editCurrentData={editCurrentData}/>}
                        </tr>
                        )}
                      </tbody>
            </table>
    </div>
  )
}
