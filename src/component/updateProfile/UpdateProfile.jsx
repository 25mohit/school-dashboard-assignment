import { useEffect, useState } from 'react'
import './UpdateProfile.css'
import { useDispatch } from 'react-redux/es/exports'

export const UpdateProfile = ({setShowEditProfile}) => {
    const [fName, setFName] = useState('')
    const [fEmail, setFEmail] = useState('')
    const [fMobile, setFMobile] = useState('')
    const [fCity, setFCity] = useState('')
    const [nameFocused, setNameFocused] = useState(false)
    const [emailFocused, setEmailFocused] = useState(false)
    const [mobileFocused, setMobileFocused] = useState(false)
    const [cityFocused, setCityFocused] = useState(false)

    const dispatch = useDispatch()
    const keyPressListner = (e) => {
        if(e.keyCode===27){
            setShowEditProfile(false)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', keyPressListner)
        return() => {
            document.removeEventListener('keydown', keyPressListner)
        }
    },[])  
    const updateProfile = (e) => {
        e.preventDefault()
        if(fName && fEmail.match("@.") && fMobile&& fCity){
            if(fMobile.length<13){
                dispatch({
                    type:"UPDATE_PROFILE",
                    payload:{
                        fName, fEmail, fMobile, fCity
                    }
                })
                setShowEditProfile(false)
            }else{
                setMobileFocused(true)
                alert('Please enter mobile no is allowed length !')
            }
        }else{
            setNameFocused(true)
            setEmailFocused(true)
            setMobileFocused(true)
            setCityFocused(true)
        }
    }

    return(
        <div className="update-profile">
                <div className="update-profile-container">
                        <div className="profile-head">
                            <p className="p-update-title">Update Profile</p>
                        </div>
                        <form action="" className="profile-up-form">
                            <label htmlFor="pName" id='lables'>Faculty Name</label>
                            <input type="text" name='pName'  onInput={() => {setNameFocused(true)}} focused={nameFocused.toString()} value={fName} onChange={e=> setFName(e.target.value)} className='update-p-field-n' required/>
                            <p className="name-error">Error: Name field can't be empty</p>
                            <label htmlFor="pName" id='lables'>Email</label>
                            <input type="email" name='pName'  onInput={() => {setEmailFocused(true)}} focused={emailFocused.toString()} value={fEmail} onChange={e=> setFEmail(e.target.value)} className='update-p-field-mail' required/>
                            <p className="email-error">Error: Please enter a valid email</p>
                            <label htmlFor="pName" id='lables'>Mobile</label>
                            <input type="text" name='pName' onInput={() => {setMobileFocused(true)}} focused={mobileFocused.toString()} value={fMobile} onChange={e=> setFMobile(e.target.value)} className='update-p-field-m' required/>
                            <p className="mobile-error">Error: Mobile field can't be empty and max 13 numbers</p>
                            <label htmlFor="pName" id='lables'>City</label>
                            <input type="text" name='pName'  onInput={() => {setCityFocused(true)}} focused={cityFocused.toString()} value={fCity} onChange={e=> setFCity(e.target.value)} className='update-p-field-c' required/>
                            <p className="city-error">Error: City field can't be empty</p>
                            <div className="update-p-footer">
                                <button className='p-cancel-bt' onClick={() => setShowEditProfile(false)}>CANCEL</button>
                                <button className='p-submit-bt' onClick={ updateProfile }>CONFIRM</button>
                            </div>
                        </form>
                </div>
        </div>
    )
}