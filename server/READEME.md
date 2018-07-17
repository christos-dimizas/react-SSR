**------------------------------------------------------------------------------------------------**

_**Part 2 - Server Configuration**_

**------------------------------------------------------------------------------------------------**

In this part we added the client side development of the SSR process. In more detail:

- We refactored require expressions with import in order to maintain the same code style.
- We created the client webpack build plan in order to produce the required build result. In this way we now are able to start the lunch the react app on the client side in this time.
- On express index.js file we added the html snippet which includes
    - the server side content of the app
    - the element with a specific id from which the react app will lunch
    - and the client side js build result of the /server/src/client/client.js file which actually is the initializer of the react app.

So, now in order to run the whole app we must:

- Build the server side     - Run:  `npm run dev:build:server`
- Build the client side     - Run:  `npm run dev:build:client`
- Watch and restart server  - Run:  `npm run dev:server`



**------------------------------------------------------------------------------------------------**

_**Part 1 - Initial Setup**_

**------------------------------------------------------------------------------------------------**

- Install dependencies              - on /server/ RUN : `npm install`

- Prepare the bundle build result   - on /server/ RUN : `npm run dev:build:server`

- Test the built result             - on /server/, RUN : `node build/bundle.js`

What we did so far:

- We had to run JSX files on server
    - Solution: Run webpack on all of our server side code, then execute the resulting bundle.

- We need to turn components into HTML
    - Use the 'react-dom/server' libraries 'renderToString' function.
    



