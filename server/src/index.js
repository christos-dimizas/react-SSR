// EXPRESS SETUP
import 'babel-polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
const app = express();

// Tell express to make the public folder available. With the static statement the bundle.js in the html below is
// automatically pointed to the public folder.
app.use(express.static('public'));
// Express here watches all urls on port 3000 and responds with the <Home/> as a string
app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(Routes, req.path).map(({route}) =>
        route.loadData ? route.loadData(store) : null
    );

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});