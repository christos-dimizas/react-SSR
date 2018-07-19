import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersList from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

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
            {
                path: '/admins',
                component: AdminsListPage.component,
                loadData: AdminsListPage.loadData,
            },
            {
                ...NotFoundPage
            },
        ]
    },
];