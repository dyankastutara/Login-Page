import React from 'react';
import { Button, Divider, Alert, Input } from 'antd';
import { GoogleLogin } from 'react-google-login';
import PropTypes from 'prop-types';

import FacebookLogin from '../social/facebooklogin/index';
import './LoginForm.less';

class LoginForm extends React.Component {
  constructor(){
    super();
    this.state = {
    	email:'',
    	password:'',
      coords:{
        lat:null,
        lng:null
      },
    	errors:{},
    	errorMessage:null,
    	isLoading:false,
    };
  }
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  }


  _onChangeEmail = (e) => {
	  this.setState({email:e.target.value.toLowerCase()})
  }

  _onChangePassword = (e) => {
  	this.setState({password:e.target.value})
  }

  render() {
    const {email, password, errorMessage, isLoading} = this.state;
    return (
      <div className="login__form">
        <div style={{margin:16}}>
          {errorMessage != null ? (
            <Alert
                description={errorMessage}
                type="error"
                closable
                onClose={()=>this.setState({errorMessage:null})}
                showIcon
              />
          ):(
            null
          )}
        </div>
        <div style={{margin:16}}>
          <div>Email : </div>
          <div><Input type="text" value={email} onChange={this._onChangeEmail} className="mobile-input-login"/></div>
        </div>
        <div style={{margin:16}}>
          <div>Password : </div>
          <div><Input type="password" value={password} onChange={this._onChangePassword} onPressEnter={this._handleSubmit} className="mobile-input-login"/></div>
        </div>
        <div style={{margin:16}}>
          <Button type="primary" style={{width:'100%'}} onClick={this._handleSubmit} loading={isLoading}>Masuk</Button>
        </div>
        <div style={{margin:16}}>
          <Divider><div style={{fontSize:12, fontWeight:600, color:'rgba(0,0,0,.54)'}}><b>atau</b></div></Divider>
          <GoogleLogin
            clientId="xxx"
            buttonText="Masuk dengan Google"
            onSuccess={this._authResponseGoogle}
            onFailure={this._authResponseGoogle}
            className="loginBtn loginBtn--google"
          />
          <FacebookLogin
            appId="xxx"
            buttonText="Masuk dengan Facebook"
            onSuccess={this._authResponseFacebook}
          />
        </div>
        <div style={{margin:16}}>
          <Divider><div style={{fontSize:12, fontWeight:600, color:'rgba(0,0,0,.54)'}}><b>Belum Punya Akun ?</b></div></Divider>
          <Button htmlType="submit" style={{width:'100%'}}>
            Silahkan daftar disini
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
