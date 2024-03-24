import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {

    const { profile } = useSelector(state => state);
    console.log('Profile State Profile: ', profile);

    return (
        <div className='profile-container'>
            <p>This is Profile</p>
            {/* <Counter profile={{ displayName: 'Nilesh', country: 'India', email: 'abc@gmail.com' }} /> */}
            <div className="counter_title">Profile
                <p>Display Name: {profile.displayName}</p>
                <p>Country: {profile.country}</p>
                <p>Email: {profile.email}</p>
            </div>
        </div>
    );
}

export default Profile;
