import './Dashboard.css';
import Counter from '../Counter';

function Dashboard() {

    return (
        <div>
            <p>This is Dashboard</p>
            <Counter profile={{ displayName: 'Nilesh', country: 'India', email: 'abc@gmail.com' }} />
        </div>
    );
}

export default Dashboard;
