import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './AddCourse.css'

export const AddCourse = ({setShowCourse}) => {
    const [cTitle, setCTitle] = useState('')
    const [cDescription, setCDescription] = useState('')
    const [cfName, setCfName] = useState('')
    const [csDate, setCsDate] = useState('')
    const [ceDate, setCeDate] = useState('')
    const [titFocus, setTitFocus] = useState(false)
    const [desFocus, setDesFocus] = useState(false)
    const [nameFocus, setNameFocus] = useState(false)
    const [stFocus, setStFocus] = useState(false)
    const [enFocus, setEnFocus] = useState(false)

    const dispatch = useDispatch()
    const nDate = new Date()
    const fullDate = `${nDate.getDate()}-${nDate.getMonth()+1}-${nDate.getFullYear()}`

    const createCourse = (e) => {
        e.preventDefault()
        if(cTitle&&cDescription&&cfName&&csDate&&ceDate){
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
            setShowCourse(false)
        }else{
            setTitFocus(true)
            setDesFocus(true)
            setNameFocus(true)
            setStFocus(true)
            setEnFocus(true)
        }
        }
    return(
        <div className="add-course">
                <div className="add-course-container">
                        <div className="courses-head">
                            <p className="courses-title">Create Course</p>
                        </div>
                        <form action="" className='course-form'>
                            <label htmlFor="cTitle" id='course-lable'>Title</label>
                            <input type="text" id='course-fields' onInput={() => {setTitFocus(true)}} focused={titFocus.toString()} value={cTitle} onChange={e=> setCTitle(e.target.value)} name='cTitle' required/>
                            <p className="error-name">Error: Course title can't be empty</p>
                            <label htmlFor="cDescription" id='course-lable'>Description</label>
                            <input type="text" id='course-fields-d' onInput={() => {setDesFocus(true)}} focused={desFocus.toString()} value={cDescription} onChange={e=> setCDescription(e.target.value)}  name='cDescription' required/>
                            <p className="error-des">Error: Description can't be empty</p>
                            <label htmlFor="cfName" id='course-lable'>Faculty Name</label>
                            <input type="text" id='course-fields-n' onInput={() => {setNameFocus(true)}} focused={nameFocus.toString()} value={cfName} onChange={e=> setCfName(e.target.value)}  name='cfName' required/>
                            <p className="error-cf">Error: Faculty name can't be empty</p>
                            <label htmlFor="csDate" id='course-lable'>Start Date</label>
                            <input type="date" id='course-fields-s' max={ceDate}  onInput={() => {setStFocus(true)}} focused={stFocus.toString()} value={csDate} onChange={e=> setCsDate(e.target.value)}  name='csDate' required/>
                            <p className="error-cs">Error: Please select course start date</p>
                            <label htmlFor="ceDate" id='course-lable'>End Date</label>
                            <input type="date" id='course-fields-e' min={csDate} onInput={() => {setEnFocus(true)}} focused={enFocus.toString()} value={ceDate} onChange={e=> setCeDate(e.target.value)}  name='ceDate' required/>
                            <p className="error-ce">Error: Please select course end date</p>
                            <div className="course-footer">
                                <button className='p-cancel-bt' onClick={() => {setShowCourse(false)}}>CANCEL</button>
                                <button className='p-submit-bt' onClick={createCourse}>CONFIRM</button>
                            </div>
                        </form>
                </div>
        </div>
    )
}