**------------------------------------------------------------------------------------------------**

_**Part 2 - Server Configuration**_

**------------------------------------------------------------------------------------------------**



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
    



