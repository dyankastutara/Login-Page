import React from 'react';
import './header.css';

const styles = {
     logo: {
       width: 150,
       margin: '6px 0 0 0',
       float: 'left',
       fontSize:28,
       fontWeight:600,
     },
     img:{
       paddingTop:'40px'
     }
}

class HeaderAuth extends React.Component {
  render(){
    return (
       <div style={styles.logo} onClick={() => window.scrollTo(0, 0)}>
           <img style={{ width: '100%', margin: '0px 28px 16px 0'}} src="https://s3-ap-southeast-1.amazonaws.com/image-plasgos/font+plasgos.png" alt="logo-plasgos"/>
       </div>
    );
  }
}

export default HeaderAuth;
