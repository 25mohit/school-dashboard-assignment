import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './AddCourse.css'

export const AddCourse = ({setShowCourse}) => {
    const [cTitle, setCTitle] = useState('')
    const [cDescription, setCDescription] = useState('')
    const [cfName, setCfName] = useState('')
    const [csDate, setCsDate] = useState('')
    const [ceDate, setCeDate] = useState('')

    const dispatch = useDispatch()
    const nDate = new Date()
    const fullDate = `${nDate.getDate()}-${nDate.getMonth()+1}-${nDate.getFullYear()}`

    const createCourse = (e) => {
        e.preventDefault()
        dispatch({
            type:'CREATE_COURSE',
            payload:{
                id:new Date().getTime(),
                cTitle,
                fullDate,
                cDescription,
                cfName,
                csDate,
                ceDate
            }
        })
        // setShowCourse(false)
    }
    return(
        <div className="add-course">
                <div className="add-course-container">
                        <div className="courses-head">
                            <p className="courses-title">Create Course</p>
                        </div>
                        <form action="" className='course-form'>
                            <label htmlFor="cTitle" id='course-lable'>Title</label>
                            <input type="text" id='course-fields' value={cTitle} onChange={e=> setCTitle(e.target.value)} name='cTitle'/>
                            <label htmlFor="cDescription" id='course-lable'>Description</label>
                            <input type="text" id='course-fields' value={cDescription} onChange={e=> setCDescription(e.target.value)}  name='cDescription'/>
                            <label htmlFor="cfName" id='course-lable'>Faculty Name</label>
                            <input type="text" id='course-fields' value={cfName} onChange={e=> setCfName(e.target.value)}  name='cfName'/>
                            <label htmlFor="csDate" id='course-lable'>Start Date</label>
                            <input type="date" id='course-fields' value={csDate} onChange={e=> setCsDate(e.target.value)}  name='csDate'/>
                            <label htmlFor="ceDate" id='course-lable'>End Date</label>
                            <input type="date" id='course-fields' value={ceDate} onChange={e=> setCeDate(e.target.value)}  name='ceDate'/>
                            <div className="course-footer">
                                <button className='p-cancel-bt' onClick={() => {setShowCourse(false)}}>CANCEL</button>
                                <button className='p-submit-bt' onClick={createCourse}>CONFIRM</button>
                            </div>
                        </form>
                </div>
        </div>
    )
}