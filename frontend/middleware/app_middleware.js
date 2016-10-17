import {TimezoneConstants, receiveUser, receiveTimezones} from '../actions/timezone_actions';
import {addUser, fetchTimezones, updateTimezone} from '../util/timezone_api_util';

export default ({ getState, dispatch }) => next => action => {
  let success;
  let failure;
  switch(action.type){
    case (TimezoneConstants.CREATE_USER):
      success = (user) => dispatch(receiveUser(user));
      failure = (data) => console.log(data);
      addUser({user: action.user}, success, failure);
      return next(action);
    case (TimezoneConstants.REQUEST_TIMEZONES):
      success = (timezones) => dispatch(receiveTimezones(timezones));
      failure = (data) => console.log(data);
      fetchTimezones(success, failure);
      return next(action);
    case (TimezoneConstants.CHANGE_TIMEZONE):
      success = (user) => dispatch(receiveUser(user));
      failure = (data) => console.log(data);
      updateTimezone(action.userId, action.timezone, success, failure);
      next(action);
    default:
      return next(action);
  }
};
