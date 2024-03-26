import { useSelector } from 'react-redux';
import './Profile.css';
import ProfileCard from '../Card/ProfileCard';

const Profile = () => {

    const { profile } = useSelector(state => state);
    console.log('Profile State Profile: ', profile);

    return (
        <div className='profile-container'>
            <ProfileCard/>
        </div>
    );
}

export default Profile;
