import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class User extends Component
{

  componentWillMount()
  {
    console.log( GoogleLogin )
  }

  log()
  {
    console.log( arguments );
  }

  render(){
    return(
      <div>
      asdsadsasdsa
          <GoogleLogin
      clientId="668883114041-ueiplb44e7lg5g9dr0207d64dllu8188.apps.googleusercontent.com"
      clientSecret="DHCI9biYbejxUD9V3ufnbgMb"
      buttonText="Login"
      callback={this.log} />
      </div>
    )
  }
}
