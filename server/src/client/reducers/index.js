import { combineReducers } from 'redux';
import userReducer from './usersRedusers';
import adminsReducer from './adminsReducer';
import authReducer from './authReducer';

export default combineReducers({
    users: userReducer,
    auth: authReducer,
    admins: adminsReducer,
});