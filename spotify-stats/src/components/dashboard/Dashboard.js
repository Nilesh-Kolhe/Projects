import { useSelector } from 'react-redux';
import './Dashboard.css';
import { useEffect, useState } from 'react';

const Dashboard = () => {

    // const { profile } = useSelector(state => state);
    const { token } = useSelector(state => state);
    const [mostPlayed, setMostPlayed] = useState([]);

    const load = async () => {
        const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });
        const response = await result.json();
        console.log('Most Played: ', response);
        mapToSongState(response);;
    }

    const mapToSongState = (result) => {
        let songs = [];
        result.items.map((item) => {
            const song = {
                album: {
                    name: item.album.name,
                    thumbnail: item.album.images[0].url
                },
                song: {
                    name: item.name,
                    artist: item.artists[0].name,
                    preview: item.preview_url
                }
            }
            songs.push(song);
        });
        setMostPlayed(songs);
    }

    useEffect(() => {
        const loadData = async () => {
            await load();
            // mapToSongState(result);
        }
        loadData();
        console.log('State MostPlayed: ', mostPlayed);
    }, []);

    return (
        <div className='dashboard-container'>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: 300, backgroundColor: 'lightgrey', width: 250, borderRadius: 10, padding: 10 }}>
                    <div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
                        <img src={mostPlayed[0]?.album.thumbnail} style={{ height: 170, width: 170, borderRadius: '80px' }} alt="Album" />
                        {/* <audio controls>
                            <source src={mostPlayed[0]?.song.preview} type="audio/mpeg" />
                        </audio> */}
                        <p style={{ color: '#000', fontWeight: 700, fontSize: 'larger', marginTop: 10, marginBottom: 0 }}> {mostPlayed[0]?.song.name}</p>
                        <p style={{ color: '#000', fontWeight: 400, fontSize: 'small' }}> {mostPlayed[0]?.song.artist}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 300, backgroundColor: 'lightgrey', width: 250, borderRadius: 10, padding: 10 }}><p>This is Section Two</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 300, backgroundColor: 'lightgrey', width: 250, borderRadius: 10, padding: 10 }}><p>This is Section Three</p></div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 300, backgroundColor: 'lightgrey', width: 250, borderRadius: 10, padding: 10 }}><p>This is Section Four</p></div>
            </div>
            <div style={{ marginTop: 20, height: 175, backgroundColor: 'blue', width: 1000, borderRadius: 10, padding: 10 }}><p>This is Section Four</p></div>
        </div>
    );
}

export default Dashboard;
