import React from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from '../social/facebooklogin/index';
import PropTypes from 'prop-types';
import { Alert, Input, Icon, Button, Divider } from 'antd';
import '../social/style.css';

const styles = {
  loginForm:{
    margin: 'auto',
    border: '1px solid #e0e0e0',
    padding: '25px 25px',
    borderRadius: '3px',
    width:'100%',
    textAlign:'left',
    fontSize:14
  },
  form:{
    margin:'0 0 16px 0'
  },
  label:{
    display:'flex',
    justifyContent:'flex-start',
    marginBottom:6
  }
}
class LoginForm extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  state = {
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

  _handleSubmit = (e) => {
    this.setState({isLoading:true})
  }

  _onChangeEmail = (e) => {
	  this.setState({email:e.target.value.toLowerCase()})
  }

  _onChangePassword = (e) => {
  	this.setState({password:e.target.value})
  }

  _authResponseGoogle = (response)=>{
    // if(!response.error){
    //   this.props.authGoogle(response.profileObj)
    // }
  }
  _authResponseFacebook = (response) =>{
    // if(response){
    //   let data = {
    //     email:response.email,
    //     name:response.name,
    //     imageUrl:response.picture.data.url
    //   }
    //   this.props.authFacebook(data)
    // }
  }
  render() {
    const {email, password, errors, errorMessage, isLoading} = this.state;
    return (
    	<div style={styles.loginForm}>
        <div style={{fontSize:16, color:'#000', fontWeight:600, width:'100%', textAlign:'left', marginBottom:16}}>Masuk ke akun anda</div>
        <div style={{fontSize:'12px', marginBottom:16}}>
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
        <div style={styles.form}>
          <div style={styles.label}>
            <div style={{color:'#000'}}>Email :</div>
          </div>
          <div>
            <Input
              value={email}
              onChange={this._onChangeEmail}
              prefix={<Icon type="mail" />}
            />
          </div>
          {
            errors.email ? (
                <div style={{color:'red', fontSize:12}}><i>{errors.email}</i></div>
            ) : null
          }
        </div>
        <div style={styles.form}>
          <div style={{...styles.label, display:'flex', justifyContent:'space-between'}}>
            <div style={{color:'#000'}}>Kata Sandi :</div>
            <div style={{fontSize:12}}>Lupa Kata Sandi ?</div>
          </div>
          <div>
            <Input
              value={password}
              onChange={this._onChangePassword}
              prefix={<Icon type="lock" />}
              type="password"
              onPressEnter={this._handleSubmit}
            />
          </div>
        </div>
        <div>
          <Button  htmlType="submit" style={{width:'100%', backgroundColor:'#fa541c', color: '#fff'}} onClick={this._handleSubmit}>
            <b>{!isLoading ? 'Login' : <Icon type="loading" />}</b>
          </Button>
        </div>
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
        <Divider><div style={{fontSize:12, fontWeight:600, color:'rgba(0,0,0,.54)'}}><b>Belum Punya Akun ?</b></div></Divider>
        <Button htmlType="submit" style={{width:'100%'}}>
          Silahkan daftar disini
        </Button>
      </div>
    );
  }
}
export default LoginForm;
