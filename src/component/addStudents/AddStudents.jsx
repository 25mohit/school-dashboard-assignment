import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './AddStudents.css'

export const AddStudents = ({ setAddStudentModal }) => {
    const dispatch = useDispatch()
    const [sName, setSName] = useState('')
    const [sClass, setSClass] = useState()
    const [sScore, setSScore] = useState()
    const [nFocused, setNFocused] = useState(false)
    const [cFocused, setCFocused] = useState(false)
    const [sFocused, setSFocused] = useState(false)
    const [showResult, setShowResult] = useState({result:'', grade:''})

    const keyPressListner = (e) => {
        if(e.keyCode==27){
            setAddStudentModal(false)
        }
    }
   
    useEffect(() => {
        document.addEventListener('keydown', keyPressListner)
        return() => {
            document.removeEventListener('keydown', keyPressListner)
        }
    },[])  

    useEffect(() => {
        if(sScore >0 && sScore <=31){
            setShowResult({result:'Fail', grade:'Poor'})
        }
        if(sScore >31 && sScore <=75){
            setShowResult({result:'Passed', grade:'Average'})
        }
        if(sScore >75 && sScore <=100){
            setShowResult({result:'Passed', grade:'Excellent'})
        }
        setSScore(Number(sScore))
        setSClass(Number(sClass))
    },[sScore])
    
    const addStudent = (e) => {
        e.preventDefault()
        if(sName&& (sScore>=0 && sScore<=100)&& (sClass>=1 && sClass<=12)){
                dispatch({
                    type:"ADD_STUDENT",
                    payload:{
                        id:new Date().getTime(),
                        sName, sClass, sScore
                    }
                })
                setAddStudentModal(false)
        }else{
            setCFocused(true)
            setSFocused(true)
            setNFocused(true)
        }
    }

  return (
    <div className='add-students-div'>
            <div className="add-student-container">
                <div className="heading-div">
                        <h2 className="add-heading">Add student</h2>
                </div>
                <form action="submit" className="add-student-form">
                        <label htmlFor="sName">STUDENT NAME*</label>
                        <input id='input' className='input-field-add' type="text"  name='sName'  onInput={() => {setNFocused(true)}} focused={nFocused.toString()}  value={sName} onChange={ e => setSName(e.target.value)} required/>
                        <p className="error">Error: Name field cannot be left blank</p>
                        <label htmlFor="sClass">CLASS*</label>
                        <input className='input-field-cls-add' type="number" min='1' max='12' onInput={() => {setCFocused(true)}} focused={cFocused.toString()} name='sClass' value={sClass} onChange={ e=>setSClass(e.target.value) } required/>
                        {cFocused ? <p className="error-class">Error: Please input values between 1 & 12</p>: <p  className='default-text'>Please input values between 1 & 12</p>}
                        <label htmlFor="sScore">SCORE*</label>
                        <input className='input-field-sco-add' type="number" min='0' max='100' onInput={() => {setSFocused(true)}} focused={sFocused.toString()} name='sScore' value={sScore} onChange={ e =>setSScore(e.target.value) } required/>
                        {sFocused ? <p className="error-score">Error: Please input values between 0 & 100</p> : <p className='default-text'>Please input values between 0 & 100</p>}
                        <label htmlFor="result">RESULT</label>
                       {showResult.result ?  <div className='result-status' id={sScore>=32 ? 'pass' : 'failed'} >{showResult.result}</div>: <p  className='empty-dash'>-</p>}
                        <label htmlFor="grade">GRADE</label>
                        <p className="grade-text" id={(sScore<=31 && 'por')||(sScore>=32 && sScore<=75 && 'avg') || (sScore>=76 && sScore<=100 && 'exc')}>{ showResult.grade ? showResult.grade : <p className='empty-dash'>-</p>}</p>
                        <div className="form-footer">
                                <button className='cancel-bt' onClick={() => {setAddStudentModal(false)}}>CANCEL</button>
                                <button className='submit-bt' onClick={ addStudent }>CONFIRM</button>
                        </div>
                </form>
            </div>
    </div>
  )
}
