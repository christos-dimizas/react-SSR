import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>Home component</div>
            <button onClick={() => console.log('clicked.....')}>Press</button>
        </div>
    )
};

export default {
    component: HomePage,
};