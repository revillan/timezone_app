export const addUser = function(user, success, error) {
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user,
    success,
    error
  });
};

export const fetchTimezones = function(success, error) {
  $.ajax({
    method: 'GET',
    url: 'api/timezones',
    success,
    error
  });
};

export const updateTimezone = function(id, timezone, success, error) {
  $.ajax({
    method: 'PATCH',
    url: 'api/users/'+id,
    data: timezone,
    success,
    error
  });
};
