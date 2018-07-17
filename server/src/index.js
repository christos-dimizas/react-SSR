/**
 * EXPRESS SETUP
 */

import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// Tell express to make the public folder available. With the static statement the bundle.js in the html below is
// automatically pointed to the public folder.
app.use(express.static('public'));
// Express here watches the root url on port 3000 and responds with the <Home/> as a string
app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    const html = `
        <html>
            <head></head>
            <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
            </body>
        </html>
    `;
    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});