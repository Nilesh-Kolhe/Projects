import { useSelector } from 'react-redux';
import './Dashboard.css';
// import Counter from '../Counter';

const Dashboard = () => {

    const { profile } = useSelector(state => state);
    // const { counter } = useSelector(state => state);
    console.log('Dashboard State Profile: ', profile);

    return (
        <div className='dashboard-container'>
            <p>This is Dashboard</p>
            {/* <Counter profile={{ displayName: 'Nilesh', country: 'India', email: 'abc@gmail.com' }} /> */}
            <div className="counter_title">Profile
                <p>Display Name: {profile.displayName}</p>
                <p>Country: {profile.country}</p>
                <p>Email: {profile.email}</p>
            </div>
        </div>
    );
}

export default Dashboard;
