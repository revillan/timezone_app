import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

class App extends React.Component {

  render() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  console.log(this.props);

  return(
    <GoogleLogin
      clientId="327432815781-hln7qto00ru2p2ub4gv2s2h93rm0pdm2.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={(data) => this.props.createUser( {name: data.profileObj.name, image_url: data.profileObj.imageUrl}) }
      onFailure={(data) => console.log(data)} >
      <span> Login with Google</span>
    </GoogleLogin>
    );
  }

}

export default App;
