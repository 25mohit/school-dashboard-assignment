import './RemoveStudent.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
export const RemoveStudent = ({ setDeleteStudent,id, currentSData }) => {
    const dispatch = useDispatch()

    const keyPressListner = (e) => {
        if(e.keyCode==27){
            setDeleteStudent(false)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', keyPressListner)
        return() => {
            document.removeEventListener('keydown', keyPressListner)
        }
    },[])  
    const removeStudent = () => {
            dispatch({
                type :"REMOVE_STUDENT",
                payload:id
            })
            setDeleteStudent(false)
    }
  return (
    <div className='remove-student'>
                <div className="remove-student-container">
                        <div className="header-remove-student">
                                <h2 className="remove-heading">Remove student</h2>
                        </div>
                        <div className="content-remove-student">
                                <h3 className="heading-content">Are you sure you want to remove the current student from the list?</h3>
                                <span>STUDENT NAME</span>
                                <p className="sName-delete">{currentSData.name}</p>
                                <span>CLASS</span>
                                <p className="sName-delete">{currentSData.class}</p>
                        </div>
                        <div className="delete-student-footer">
                                <button id='cancel-bt-delete' onClick={() => setDeleteStudent(false)}>CANCEL</button>
                                <button id='delete-bt-delete' onClick={ removeStudent }>DELETE</button>
                        </div>
                </div>
    </div>  
  )
}
