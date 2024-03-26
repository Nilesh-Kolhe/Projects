const express = require('express');
const path = require('path');
const cors = require('cors');
const querystring = require('qs');
const app = express();
app.use(cors());
// app.use(express.static(path.join(__dirname, '../react-app/build')));

app.get('/dashboard', (req, res) => {
    // res.send('Hello World !');
    var client_id = '3f15b10d57a549d789fcbe273f880b91';
    // var redirect_uri = 'https://oauth.pstmn.io/v1/browser-callback';
    var redirect_uri = 'http://localhost:3000/#/home';

    // var state = generateRandomString(16);
    var state = "";
    var scope = 'user-read-private user-read-email';
    const header = new Headers({ "Access-Control-Allow-Origin": "*" });
    // res.send('https://accounts.spotify.com/authorize?' +
    //     querystring.stringify({
    //         response_type: 'code',
    //         client_id: client_id,
    //         scope: scope,
    //         redirect_uri: redirect_uri,
    //         state: state,
    //         show_dialog: true
    //     }), { header: header });

    const url = "https://accounts.spotify.com/authorize?" +
                    querystring.stringify({
                    response_type: "code",
                    client_id: client_id,
                    scope,
                    redirect_uri: redirect_uri,
                    state,
                });
        res.send(url);
});

// This code makes sure that any request that does not matches a static file
// in the build folder, will just serve index.html. Client side routing is
// going to make sure that the correct content will be loaded.
// app.use((req, res, next) => {
//     if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
//         next();
//     } else {
//         res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//         res.header('Expires', '-1');
//         res.header('Pragma', 'no-cache');
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     }
// });

// app.use(express.static(path.join(__dirname, 'build')));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});