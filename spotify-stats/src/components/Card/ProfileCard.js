import { useSelector } from 'react-redux';
import './ProfileCard.css';

const ProfileCard = () => {
    const { profile } = useSelector(state => state);
    return (
        <div className="card mb-3" style={{ height: 400 }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 150, backgroundColor: 'lightgreen' }}>
                    <div>
                        <img class="card-img-top" style={{ borderRadius: 100, height: 100, width: 100 }} src={profile.picture} alt="Card" />
                    </div>
                    <div style={{ textAlign: 'center', margin: '20px 0px' }}>
                        <p style={{ fontWeight: 600, fontSize: 'medium', marginBottom: 0 }}>{profile.displayName}</p>
                        <p style={{ fontWeight: 100, fontSize: 'x-small' }}>{profile.product}</p>
                    </div>
                </div>
                <div class="card-body" style={{ backgroundColor: 'lightgrey' }}>
                    <h5 className="card-title" style={{ marginTop: '10px' }}> Information </h5>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h6 className='card-subtitle'>Country: <p className='text-muted'>{profile.country}</p></h6>
                        <h6 className='card-subtitle'>Email: <p className='text-muted'>{profile.email}</p></h6>
                    </div>
                    <h5 className="card-title" style={{ marginTop: '10px' }}> Account </h5>
                    <hr />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h6 className='card-subtitle'>Product: <p className='text-muted'>{profile.product}</p></h6>
                        <h6 className='card-subtitle'>URI: <p className='text-muted'>{profile.uri}</p></h6>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
