export const TimezoneConstants = {
  UPDATE_TIMEZONE: "UPDATE_TIMEZONE",
  CREATE_USER: "CREATE_USER",
  RECEIVE_USER: "RECEIVE_USER"
};

export const createUser = (user) => ({
  type: TimezoneConstants.CREATE_USER,
  user
});

export const receiveUser = (user) => ({
  type: TimezoneConstants.RECEIVE_USER,
  user
});
