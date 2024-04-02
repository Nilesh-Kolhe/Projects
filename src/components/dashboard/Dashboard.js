import { useSelector } from 'react-redux';
import './Dashboard.css';
import { useEffect, useState } from 'react';

const Dashboard = () => {

    const { token } = useSelector(state => state);
    const [mostPlayed, setMostPlayed] = useState([]);
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [currentlyPlaying, setCurrentlyPlaying] = useState({});

    const getTopTracks = async () => {
        const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });
        const result = await response.json();
        return result;
    }

    const getRecentlyPlayed = async () => {
        const response = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });
        const result = await response.json();
        return result;
    }

    const mapToMostPlayedState = (result) => {
        let songs = [];
        result.items?.map((item) => {
            const song = {
                album: {
                    name: item.album.name,
                    thumbnail: item.album.images[0].url
                },
                song: {
                    name: item.name,
                    artist: item.artists[0].name,
                    preview: item.preview_url,
                    uri: item.uri
                }
            }
            songs.push(song);
        });
        setMostPlayed(songs);
    }

    const mapToRecentlyPlayedState = (result) => {
        let songs = [];
        result.items?.map((item) => {
            const song = {
                album: {
                    name: item.track.album.name,
                    thumbnail: item.track.album.images[0].url
                },
                song: {
                    name: item.track.name,
                    artist: item.track.artists[0].name,
                    preview: item.track.preview_url,
                    uri: item.track.uri,
                    id: item.track.id
                }
            }
            songs.push(song);
        });
        setRecentlyPlayed(songs);
    }

    const getCurrentlyPlaying = async () => {
        let currentlyPlayingSong = {};
        const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Currently Playing Response: ', response);
        if (response.status === 204) {
            return currentlyPlaying;
        }

        currentlyPlayingSong = await response.json();
        console.log('Currently Playing: ', currentlyPlayingSong);
        return currentlyPlayingSong;
    }

    const mapToCurrentlyPlayingState = (result) => {
        const currentSong = {
            album: {
                name: result.item.album.name,
                thumbnail: result.item.album.images[0].url
            },
            song: {
                name: result.item.name,
                artist: result.item.artists[0].name,
                uri: result.item.uri,
                isPlaying: result.is_playing
            }
        };
        console.log('Current Song: ', currentSong);
        setCurrentlyPlaying(currentSong);
    }

    useEffect(() => {
        const loadData = async () => {
            console.log('Dashboard Component');
            const topTracks = await getTopTracks();
            mapToMostPlayedState(topTracks);
            const recentlyPlayedResponse = await getRecentlyPlayed();
            mapToRecentlyPlayedState(recentlyPlayedResponse);
            const currentlyPlayingResponse = await getCurrentlyPlaying();
            console.log('Object.keys(currentlyPlayingResponse).length: ', Object.keys(currentlyPlayingResponse).length)
            if (Object.keys(currentlyPlayingResponse).length !== 0) {
                mapToCurrentlyPlayingState(currentlyPlayingResponse);
            }
            // Object.keys(currentlyPlayingResponse).length ? mapToCurrentlyPlayingState(currentlyPlayingResponse) : setCurrentlyPlaying(null);
            console.log('State Currently Playing: ', currentlyPlaying);
        }
        loadData();
    }, []);

    return (
        <div className='dashboard-container'>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: 300, backgroundColor: '#000', width: 250, borderRadius: 10, padding: 10 }}>
                    <div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
                        <p style={{ color: '#FFF', backgroundColor: '#1ab26b', borderRadius: 7, marginBottom: 10, fontWeight: 500, fontSize: 'small' }}> Most Played </p>
                        <img src={mostPlayed[0]?.album.thumbnail} style={{ height: 150, width: 150, borderRadius: '80px' }} alt="Album" />
                        <p style={{ color: '#FFF', fontWeight: 700, fontSize: 'larger', marginTop: 8, marginBottom: 0 }}> {mostPlayed[0]?.song.name}</p>
                        <p style={{ color: '#FFF', fontWeight: 400, fontSize: 'small' }}> {mostPlayed[0]?.song.artist}</p>
                        <a href={mostPlayed[0]?.song.uri}
                            style={{
                                backgroundColor: '#1ab26b',
                                borderRadius: 10,
                                padding: '6px 9px',
                                textDecoration: 'none',
                                color: '#FFF',
                                fontWeight: 700,
                                fontSize: 'small'
                            }}>
                            Open Spotify
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 300, backgroundColor: '#000', width: 400, borderRadius: 10, padding: 10 }}>
                    <p style={{ color: '#FFF', backgroundColor: '#1ab26b', borderRadius: 7, marginBottom: 10, fontWeight: 500, textAlign: 'center', fontSize: 'small' }}> Recently Played </p>
                    <div className='song-container' style={{ height: '100%', width: '100%', textAlign: 'center', overflowY: 'auto' }}>
                        {recentlyPlayed.map((item, index) => {
                            return (
                                <div key={item.song.id} className='recent-song' style={{ display: 'flex', justifyContent: 'space-between', height: 60, overflowY: 'auto' }}>
                                    <div style={{ width: '25%', paddingTop: 3 }}>
                                        <img src={item?.album.thumbnail} style={{ height: 45, width: 45 }} alt="Album" />
                                    </div>
                                    <div style={{ width: '50%' }}>
                                        <p style={{ color: '#FFF', fontWeight: 700, fontSize: 'small', marginTop: 10, marginBottom: 0 }}> {item?.song.name}</p>
                                        <p style={{ color: '#FFF', fontWeight: 400, fontSize: 'x-small' }}> {item.song.artist}</p>
                                    </div>
                                    <div style={{ alignItems: 'center', display: 'flex', margin: '0px 15px', width: '25%' }}>
                                        <a href={item.song.uri}
                                            style={{
                                                backgroundColor: '#1ab26b',
                                                borderRadius: 10,
                                                padding: '6px 9px',
                                                textDecoration: 'none',
                                                color: '#FFF',
                                                fontWeight: 700,
                                                fontSize: 'x-small',
                                                minWidth: 100
                                            }}>
                                            Open Spotify
                                        </a>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 300, backgroundColor: '#000', width: 250, borderRadius: 10, padding: 10 }}>
                    <p style={{ color: '#FFF', backgroundColor: '#1ab26b', borderRadius: 7, marginBottom: 10, fontWeight: 500, textAlign: 'center', fontSize: 'small' }}>
                        Now Playing
                    </p>
                    <div className='song-container' style={{ height: '100%', width: '100%', textAlign: 'center', overflowY: 'auto' }}>
                        {Object.keys(currentlyPlaying).length ? <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', textAlign: 'center' }}>
                            <div> 
                                <img src={currentlyPlaying.album.thumbnail} style={{ height: 150, width: 150, borderRadius: '80px' }} alt="Album" />
                            </div>
                            <p className='song-name' style={{ color: '#FFF', fontWeight: 700, fontSize: 'medium', marginTop: 8, marginBottom: 0 }}> {currentlyPlaying.song.name}</p>
                            <p style={{ color: '#FFF', fontWeight: 400, fontSize: 'small' }}> {currentlyPlaying.song.artist}</p>
                            <a href={currentlyPlaying.song.uri}
                                style={{
                                    backgroundColor: '#1ab26b',
                                    borderRadius: 10,
                                    padding: '6px 9px',
                                    textDecoration: 'none',
                                    color: '#FFF',
                                    fontWeight: 700,
                                    fontSize: 'small'
                                }}>
                                Open Spotify
                            </a>
                        </div> : <> <p style={{ color: '#FFF' }}>No Song Playing Currently</p></>}
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: 300, backgroundColor: '#000', width: 250, borderRadius: 10, padding: 10 }}><p style={{ color: '#FFF' }}>This is Section Four</p></div>
            </div>
            <div style={{ marginTop: 20, height: 175, backgroundColor: '#000', width: '100%', borderRadius: 10, padding: 10 }}><p style={{ color: '#FFF' }}>This is Section Five</p></div>
        </div>
    );
}

export default Dashboard;
