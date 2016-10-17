import react from 'react';
import { combineReducers } from 'redux';
import TimezoneReducer from './timezone_reducer';

const RootReducer = combineReducers({
  timezone: TimezoneReducer
});


export default RootReducer;
