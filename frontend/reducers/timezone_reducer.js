import merge from 'lodash/merge';
import {TimezoneConstants} from '../actions/timezone_actions';

const _default = Object.freeze({
  user: {}
});

const TimezoneReducer = (state = {}, action) => {
  switch(action.type){
    case TimezoneConstants.RECEIVE_USER:
      console.log("here");
      let user = action.user;
      return merge( {}, _default, { user });
    default:
      return state;
  }
};

export default TimezoneReducer;
