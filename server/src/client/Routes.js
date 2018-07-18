import React from 'react';
import HomePage from './pages/HomePage';
import UsersList from './pages/UsersListPage';

export default [
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
];