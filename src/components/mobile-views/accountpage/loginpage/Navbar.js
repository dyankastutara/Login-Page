import React from 'react';
import { NavBar } from 'antd-mobile';
import { Icon } from 'antd';
import './Navbar.less';
import 'antd-mobile/dist/antd-mobile.less'

class Navbar extends React.Component{
  onOpenChange = () => {
    this.props.funcOnLeftClick()
  }
  render(){
    return(
      <div className="navbar__position-mobile-login">
        <NavBar
          style={{backgroundColor:"#fff"}}
          icon={<Icon type="arrow-left" style={{fontSize:24, fontWeight:'bold', color:'rgba(0, 0, 0, 0.7)'}} />}
          onLeftClick={this.onOpenChange}
          leftContent={[
            <div key="login" style={{display:'flex', alignItems:'center', height:52}}><span style={{fontSize:18, fontWeight:'bold', color:'rgba(0, 0, 0, 0.7)'}}> Masuk</span></div>
          ]}
        />
      </div>
    )
  }
}

export default Navbar;
