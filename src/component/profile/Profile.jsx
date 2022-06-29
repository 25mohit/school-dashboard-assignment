import { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { BsPlusLg } from 'react-icons/bs'
import { UpdateProfile } from '../updateProfile/UpdateProfile'
import './Profile.css'

export const Profile = () => {
    const [showEditProfile, setShowEditProfile] = useState(true)
    const profileData = useSelector(state => state.profile)
    
    return(
        <div className="profile">
                <div className="profile-header">
                    {/* <p></p> */}
                        <h1 className="user-name">Update Profile</h1>
                        <button className="add-bt" onClick={() => setShowEditProfile(true)}><BsPlusLg id='bt-icon'/>Update Profile</button>
                </div>
                <div className="profile-info">
                    <div className="profile-row">
                        <label id='profile-lable'>Name:</label>
                        <p id='fName'>{profileData.fName}</p>
                    </div>
                    <div className="profile-row">
                        <label id='profile-lable'>Email:</label>
                        <p id='fEmail'>{profileData.fEmail}</p>
                    </div>
                    <div className="profile-row">
                        <label id='profile-lable'>Mobile:</label>
                        <p id='fName'>{profileData.fMobile}</p>
                    </div>
                    <div className="profile-row">
                        <label id='profile-lable'>City:</label>
                        <p id='fName'>{profileData.fCity}</p>
                    </div>
                </div>
                {showEditProfile && <UpdateProfile setShowEditProfile={ setShowEditProfile }/> }
        </div>
    )
}