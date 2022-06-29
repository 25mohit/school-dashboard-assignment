import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './EditStudent.css'

export const EditStudent = ({setEditStudent, editCurrentData}) => {
    const [sName, setSName] = useState(editCurrentData.name)
    const [sClass, setSClass] = useState(editCurrentData.class)
    const [sScore, setSScore] = useState(editCurrentData.score)
    const [nFocused, setNFocused] = useState(false)
    const [cFocused, setCFocused] = useState(false)
    const [sFocused, setSFocused] = useState(false)
    const [id, setId] = useState(editCurrentData.id)
    const [showResult, setShowResult] = useState({result:'', grade:''})

    const dispatch = useDispatch()

    const keyPressListner = (e) => {
        if(e.keyCode===27){
            setEditStudent(false)
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
    
    const editStudent = (e) => {
        e.preventDefault()
        if(sName && (sScore>=0 && sScore<=100)&& (sClass>=1 && sClass<=12)){
        dispatch({
            type: 'EDIT_STUDENT',
            payload:{
                id, sName, sClass, sScore
            }
        })
        setEditStudent(false)
    }
    }
  return (
    <div className='edit-student'>
            <div className="edit-container">
                <div className="heading-div">
                        <h2 className="add-heading">Edit student</h2>
                </div>
                <form action="submit" className="add-student-form">
                        <label htmlFor="sName">STUDENT NAME*</label>
                        <input className='input-field' type="text" onInput={() => {setNFocused(true)}} focused={nFocused.toString()}  name='sName' value={sName} onChange={ e => setSName(e.target.value)} required/>
                        <p className="error">Error: Name field cannot be left blank  </p>
                        <label htmlFor="sClass">CLASS*</label>
                        <input className='input-field-cls' type="number" min='1' max='12' onInput={() => {setCFocused(true)}} focused={cFocused.toString()} name='sClass' value={sClass} onChange={ e => setSClass(e.target.value)} required/>
                        <p className="error-class">Error: Please input values between 1 & 12</p>
                        <label htmlFor="sScore">SCORE*</label>
                        <input className='input-field-sco' type="number" min='0' max='100' onInput={() => {setSFocused(true)}} focused={sFocused.toString()} name='sScore' value={sScore} onChange={ e =>setSScore(e.target.value) } required/>
                        <p className="error-score">Error: Score field cannot be left blank</p>
                        <label htmlFor="result">RESULT</label>
                       {showResult.result &&  <div className='result-status' id={sScore>=32 ? 'pass' : 'failed'} >{showResult.result}</div>}
                        <label htmlFor="grade">GRADE</label>
                        <p className="grade-text" id={(sScore<=31 && 'por')||(sScore>=32 && sScore<=75 && 'avg') || (sScore>=76 && sScore<=100 && 'exc')}>{showResult.grade}</p>
                        <div className="form-footer">
                                <button className='cancel-bt' onClick={() => {setEditStudent(false)}}>CANCEL</button>
                                <button className='submit-bt' onClick={ editStudent }>CONFIRM</button>
                        </div>
                </form>
            </div>
    </div>
  )
}
