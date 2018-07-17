import { combineReducers } from 'redux';
import userReducer from './usersRedusers';

export default combineReducers({
    users: userReducer
});