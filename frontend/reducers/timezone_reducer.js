import merge from 'lodash/merge';
import {TimezoneConstants} from '../actions/timezone_actions';

const _default = Object.freeze({
  user: {}
});

const TimezoneReducer = (state = {}, action) => {
  switch(action.type){
    case TimezoneConstants.RECEIVE_USER:
      let user = action.user;
      return merge( {}, state, { user });
    case TimezoneConstants.RECEIVE_TIMEZONES:
      console.log();
      let timezones = action.timezones;
      return merge({}, state, { timezones });
    default:
      return state;
  }
};

export default TimezoneReducer;
