import { useState } from 'react'
import './UpdateProfile.css'
import { useDispatch } from 'react-redux/es/exports'

export const UpdateProfile = ({setShowEditProfile}) => {
    const [fName, setFName] = useState('')
    const [fEmail, setFEmail] = useState('')
    const [fMobile, setFMobile] = useState('')
    const [fCity, setFCity] = useState('')

    const dispatch = useDispatch()

    const updateProfile = (e) => {
        e.preventDefault()
        dispatch({
            type:"UPDATE_PROFILE",
            payload:{
                fName,
                fEmail,
                fMobile,
                fCity
            }
        })
        setShowEditProfile(false)
    }

    return(
        <div className="update-profile">
                <div className="update-profile-container">
                        <div className="profile-head">
                            <p className="p-update-title">Update Profile</p>
                        </div>
                        <form action="" className="profile-up-form">
                            <label htmlFor="pName" id='lables'>Faculty Name</label>
                            <input type="text" name='pName' value={fName} onChange={e=> setFName(e.target.value)} className='update-p-field'/>
                            <label htmlFor="pName" id='lables'>Email</label>
                            <input type="text" name='pName' value={fEmail} onChange={e=> setFEmail(e.target.value)} className='update-p-field'/>
                            <label htmlFor="pName" id='lables'>Mobile</label>
                            <input type="text" name='pName' value={fMobile} onChange={e=> setFMobile(e.target.value)} className='update-p-field'/>
                            <label htmlFor="pName" id='lables'>City</label>
                            <input type="text" name='pName' value={fCity} onChange={e=> setFCity(e.target.value)} className='update-p-field'/>
                            <div className="update-p-footer">
                                <button className='p-cancel-bt' onClick={() => setShowEditProfile(false)}>CANCEL</button>
                                <button className='p-submit-bt' onClick={ updateProfile }>CONFIRM</button>
                            </div>
                        </form>
                </div>
        </div>
    )
}