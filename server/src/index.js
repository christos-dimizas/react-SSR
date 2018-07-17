/**
 * EXPRESS SETUP
 */
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();


// Express here watches the root url on port 3000 and responds with the <Home/> as a string
app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    res.send(content);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});