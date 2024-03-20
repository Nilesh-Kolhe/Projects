import './Home.css';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        // const header = new Headers({ "Access-Control-Allow-Origin": "*" });
        // fetch('http://localhost:8080/home', { header: header }, { mode: 'no-cors'})
        //     .then((res) => res.json())
        //     .then((data) => console.log('Response from Server: ', data))
        //     .catch((err) => console.log(err));
    }, []);

    return (
        <div className="home-container">
            <p className="text-muted" style={{fontSize: "x-large", fontWeight: "600", marginBottom: "0px"}}>Hi There &#128075; ! This is</p>
            <p style={{fontSize: "xxx-large", fontWeight: "700", marginBottom: "2px"}}>Neelesh Kolhe</p>
            <p style={{fontSize: "small", fontWeight: "700", marginBottom: "10px"}}>Coder &#128187; | Snapper &#128248; | Footballer &#9917;</p>
        </div>
    );
}

export default Home;