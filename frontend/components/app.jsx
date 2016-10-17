import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Timezone from './timezone';


class App extends React.Component {
  constructor() {
    super();
    this.state = {options: null};
  }

  componentWillMount() {
    this.props.requestTimezones();
  }

  componentDidMount() {
    setInterval(this.props.requestTimezones, 5000);
  }

  newTimezone(e) {
    this.setState({options: e.target.value});
    this.props.changeTimezone(this.props.timezone.user.id, {timezone: e.target.value} );
  }

  render() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  let loggedIn;
  if (this.props.timezone.user === undefined) {
  loggedIn = (<GoogleLogin
      clientId="327432815781-hln7qto00ru2p2ub4gv2s2h93rm0pdm2.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={(data) => this.props.createUser( {name: data.profileObj.name, image_url: data.profileObj.imageUrl}) }
      onFailure={(data) => console.log(data)} >
      <span> Login with Google</span>
    </GoogleLogin>);
  } else {
    loggedIn = (<div><img src={this.props.timezone.user.image_url}/><div>I'M CURRENTLY IN
      <select value={this.props.timezone.user.timezone.name} onChange={this.newTimezone.bind(this)}>
        <option value="Pacific">Pacific</option>
        <option value="Eastern">Eastern</option>
        <option value="Atlantic">Atlantic</option>
        <option value="Central">Central</option>
        <option value="Mountain">Mountain</option>
        <option value="Alaskan">Alaskan</option>
        <option value="Hawaii-Aleutian">Hawaii-Aleutian</option>
      </select>
    </div>
    </div>);
  }

  let timezones;
  if (Object.keys(this.props.timezone).length === 0) {
    timezones = <div></div>;
  } else {
    timezones = Object.keys(this.props.timezone.timezones).map(timezoneId => {
      if (this.props.timezone.timezones[timezoneId].users !== undefined) {
      return <Timezone key={timezoneId} timezone={this.props.timezone.timezones[timezoneId]} TZid={timezoneId} />;
      }
    });
  }

  return(
    <div>
    {loggedIn}
    {
      timezones
    }
    </div>
    );
  }

}

export default App;
