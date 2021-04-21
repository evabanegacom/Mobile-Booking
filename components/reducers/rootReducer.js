import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import userReducer from './userReducer';
import bookingReducer from './bookingReducer';
import userBooking from './userBooking';

const rootReducer = combineReducers({ 
    cars: carsReducer,
    user: userReducer,
    booking: bookingReducer,
    userBooking
});

export default rootReducer;