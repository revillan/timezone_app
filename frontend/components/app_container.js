import {connect} from 'react-redux';
import App from './app';
import {createUser} from '../actions/timezone_actions';


const mapStateToProps = (state) => ({
  timezone: state.timezone
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
