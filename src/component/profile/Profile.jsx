import { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { BsPlusLg } from 'react-icons/bs'
import { UpdateProfile } from '../updateProfile/UpdateProfile'
import './Profile.css'

export const Profile = () => {
    const [showEditProfile, setShowEditProfile] = useState(false)
    const profileData = useSelector(state => state.profile)
    
    return(
        <div className="profile">
                <div className="profile-header">
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
                    <div className="rules">
                        <li>We collect the content and other information you provide when you use our Services, including when you sign up for an account, create or share, and message or communicate with others</li>
                        <li>We don't sell any of your information to anyone, and we never will. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio qui deleniti, quis cupiditate, tempora omnis eum id blanditiis, corporis reprehenderit natus sunt ad atque adipisci deserunt ipsam veritatis dolores? Magnam!</li>
                        <li>We don't sell any of your information to anyone, and we never will. </li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam qui corrupti perferendis officiis magni, illo non ut a reiciendis molestiae mollitia dolore deserunt tempore unde vitae! Suscipit nulla enim porro!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure pariatur accusamus nam repellendus. Quibusdam cum explicabo ipsum officiis nisi enim? Facilis soluta fugiat architecto autem repudiandae optio quisquam rem.</li>
                    </div>
                </div>
                {showEditProfile && <UpdateProfile setShowEditProfile={ setShowEditProfile }/> }
        </div>
    )
}