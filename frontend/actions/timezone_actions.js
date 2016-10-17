export const TimezoneConstants = {
  UPDATE_TIMEZONE: "UPDATE_TIMEZONE",
  CREATE_USER: "CREATE_USER",
  RECEIVE_USER: "RECEIVE_USER",
  REQUEST_TIMEZONES: "REQUEST_TIMEZONES",
  RECEIVE_TIMEZONES: "RECEIVE_TIMEZONES",
  CHANGE_TIMEZONE: "CHANGE_TIMEZONE"
};

export const createUser = (user) => ({
  type: TimezoneConstants.CREATE_USER,
  user
});

export const receiveUser = (user) => ({
  type: TimezoneConstants.RECEIVE_USER,
  user
});

export const requestTimezones = () => ({
  type: TimezoneConstants.REQUEST_TIMEZONES
});

export const receiveTimezones = (timezones) => ({
  type: TimezoneConstants.RECEIVE_TIMEZONES,
  timezones
});

export const changeTimezone = (userId, timezone) => ({
  type: TimezoneConstants.CHANGE_TIMEZONE,
  userId,
  timezone
});
