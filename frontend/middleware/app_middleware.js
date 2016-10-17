import {TimezoneConstants, receiveUser} from '../actions/timezone_actions';
import {addUser} from '../util/timezone_api_util';

export default ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case (TimezoneConstants.CREATE_USER):
      const success = (user) => dispatch(receiveUser(user));
      const failure = (data) => console.log(data);
      addUser({user: action.user}, success, failure);
      return next(action);
    default:
      return next(action);
  }
};
