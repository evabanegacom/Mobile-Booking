import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ 
    cars: carsReducer,
    users: userReducer,
});

export default rootReducer;