import {connect} from 'react-redux';
import App from './app';
import {createUser, requestTimezones, changeTimezone} from '../actions/timezone_actions';

const mapStateToProps = (state) => ({
  timezone: state.timezone
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  requestTimezones: () => dispatch(requestTimezones()),
  changeTimezone: (id, timezone) => dispatch(changeTimezone(id, timezone))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
