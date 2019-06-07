import React from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import LoginForm from './LoginForm';
import '../../styles.less';

class LoginPage extends React.Component {
  _goBack = ()=>{
    console.log("Go back");
  }

  render() {
    return (
      <DocumentTitle title={`Masuk | Plasgos`}>
        <div className="bg-white" style={{minHeight:document.documentElement.clientHeight}}>
          <Navbar funcOnLeftClick={this._goBack}/>
          <LoginForm />
        </div>
      </DocumentTitle>
    );
  }
}

LoginPage.contextTypes = {
 router: PropTypes.object.isRequired
 }

export default LoginPage;
