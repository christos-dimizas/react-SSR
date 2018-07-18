import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersList from './pages/UsersListPage';

export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                component: HomePage.component,
                exact: true,
            },
            {
                path: '/users',
                component: UsersList.component,
                loadData: UsersList.loadData,
            },
        ]
    },
];