import React from 'react';
import DocumentTitle from 'react-document-title';

import LoginForm from './LoginForm';
import Header from '../header';
import Footer from '../footer';

class LoginPage extends React.Component {
	render(){
    return(
      <DocumentTitle title={`Masuk | Plasgos`}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#fff'}}>
          <div><Header /></div>
          <div style={{width:350}}><LoginForm /></div>
          <div style={{width:'100%', marginTop:'16px'}}><Footer /></div>
        </div>
      </DocumentTitle>
    );
	}
}

export default  LoginPage;
