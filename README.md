# Timezone App

This is a full-stack Ruby on Rails application with a PostgreSQL
database and a React/Redux frontend. To run, ensure that PostgreSQL is
running, then from the root directory, run `npm install`, `rake db:
reset` and then `rails s`, and navigate to [http://localhost:3000/](http://localhost:3000/).

The app includes Google authorization as well as live updates of other users changes through asynchronous AJAX calls made every 5 seconds.
