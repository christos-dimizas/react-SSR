import { combineReducers } from 'redux';
import userReducer from './usersRedusers';
import authReducer from './authReducer';

export default combineReducers({
    users: userReducer,
    auth: authReducer,
});