import './Login.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';

const Login = () => {

    const clientId = "3f15b10d57a549d789fcbe273f880b91"; // Replace with your client ID
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const load = async () => {
        if (!code) {
            redirectToAuthCodeFlow(clientId);
        } else {
            const accessToken = await getAccessToken(clientId, code);
            // const profile = await fetchProfile(accessToken);
            await fetchProfile(accessToken);
            // populateUI(profile);
        }
    }

    function populateUI(profile) {
        if (profile.error) return;
        document.getElementById("displayName").innerText = profile.display_name;
        if (profile.images[0]) {
            const profileImage = new Image(200, 200);
            profileImage.src = profile.images[0].url;
            document.getElementById("avatar").appendChild(profileImage);
            document.getElementById("imgUrl").innerText = profile.images[0].url;
        }
        document.getElementById("id").innerText = profile.id;
        document.getElementById("email").innerText = profile.email;
        document.getElementById("uri").innerText = profile.uri;
        document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
        document.getElementById("url").innerText = profile.href;
        document.getElementById("url").setAttribute("href", profile.href);
    }

    const getAccessToken = async (clientId, code) => {
        const verifier = localStorage.getItem("verifier");
        console.log('getAccessToken');
        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", "http://localhost:3000/login");
        params.append("code_verifier", verifier);

        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        });

        const { access_token } = await result.json();
        return access_token;
    }

    const redirectToAuthCodeFlow = async (clientId) => {
        const verifier = generateCodeVerifier(128);
        const challenge = await generateCodeChallenge(verifier);
        console.log('redirectToAuthCodeFlow');
        localStorage.setItem("verifier", verifier);
        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("response_type", "code");
        params.append("redirect_uri", "http://localhost:3000/login");
        params.append("scope", "user-read-private user-read-email");
        params.append("code_challenge_method", "S256");
        params.append("code_challenge", challenge);
        document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    }

    const generateCodeVerifier = (length) => {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    const generateCodeChallenge = async (codeVerifier) => {
        const data = new TextEncoder().encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    const fetchProfile = async (token) => {
        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        const profile = await result.json();
        if (profile.error) return;
        console.log("Profile:", profile); // Profile data logs to console
        dispatch({ type: "SET_PROFILE", payload: { displayName: profile.display_name, country: profile.country, email: profile.email } })
        setIsLoggedIn(true);
        // return profile;
    }

    useEffect(() => {
        async function loadData() {
            await load();
        }
        loadData();
    });

    return (
        <div className='login-container'>
            {isLoggedIn ? <Dashboard /> : <> </>}
        </div>
    );
}

export default Login;