import React from 'react';
import {connect} from 'react-redux';
// import {pushPath} from 'redux-simple-router';
import PropTypes from 'prop-types';

import { logoutUser } from '../../../actions/auth/authAction';
import { checkCount } from '../../../actions/cartcounter/cartCounterAction';

class LogoutPage extends React.Component {
  async componentWillMount() {
    await this.props.logoutUser()
    await this.props.checkCount()
    await this.context.router.history.replace('/')
    await window.location.reload();
  }

  render() {
    return null;
  }
}
LogoutPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, {logoutUser, checkCount})(LogoutPage);
