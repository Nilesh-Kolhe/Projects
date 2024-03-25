import { useSelector } from 'react-redux';
import './Dashboard.css';
import { useEffect } from 'react';
import Card from '../Card/ProfileCard';

const Dashboard = () => {

    const { profile } = useSelector(state => state);
    const { token } = useSelector(state => state);
    console.log('Dashboard State Token: ', token);

    const load = async () => {
        const params = new URLSearchParams();
        params.append("scope", "user-top-read");

        const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });
        return await result.json();
    }

    useEffect(() => {
        async function loadData() {
            const result = await load();
            console.log('Most Played: ', result);
        }
        loadData();
    });

    return (
        <div className='dashboard-container'>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', height: 300, backgroundColor: 'lightgrey', width: 250, borderRadius: 10, padding: 10 }}>
                    <p>Most PLayed</p>
                    <div style={{backgroundColor: 'green', height: '100%'}}>
                        <p>This is Image Section</p>
                    </div>
                    <div style={{backgroundColor: 'yellow', height: '100%'}}>
                        This is Info Section
                    </div>
                </div>
                <div style={{ height: 300, backgroundColor: 'lightgrey', width: 250, borderRadius: 10, padding: 10 }}><p>This is Section Two</p></div>
                <div style={{ height: 300, backgroundColor: 'lightgrey', width: 250, borderRadius: 10, padding: 10 }}><p>This is Section Three</p></div>
            </div>
            <div style={{ marginTop: 20, height: 175, backgroundColor: 'blue', width: 1000, borderRadius: 10, padding: 10 }}><p>This is Section Four</p></div>
            {/* <p>Display Name: {profile.displayName}</p>
                <p>Country: {profile.country}</p>
                <p>Email: {profile.email}</p>
                <p>
                    <img alt = "Profile" src = {profile.picture} /></p>
                <p>Product: {profile.product}</p>
                <p>Type: {profile.type}</p>
                <p>URI: {profile.uri}</p> */}
        </div>
    );
}

export default Dashboard;
