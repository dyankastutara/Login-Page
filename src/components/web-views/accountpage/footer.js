import React from 'react';
import {
  Layout,
  Tooltip,
  Divider
} from 'antd';
import {
  FaFacebookOfficial,
  FaTwitterSquare,
} from 'react-icons/lib/fa';

const { Footer } = Layout;
const styles = {
  base: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding: '15px',
    width: '100%',
    borderTop: '.5px solid #e0e0e0'
  }
};

class FooterAuth extends React.Component {
  render() {
    return(
      <Footer style={styles.base}>
        <div style={{textAlign:'left', width:'100%', fontWeight:600, color:'rgba(0,0,0,.7)'}}>
          <div>&copy; Copyright Plasgos.com, 2018 <Divider type="vertical"/><a href="/contactus" target="_blank" onClick={() => window.scrollTo(0, 0)}>Laporkan Kendala</a></div>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
          <Tooltip title="Ikuti kami di Facebook" placement="topLeft">
            <a href="https://www.facebook.com/plasgos" target="_blank" rel="noopener noreferrer"><FaFacebookOfficial style={{fontSize:32, color:'#3b5998'}} /></a>
          </Tooltip>
          <Tooltip title="Ikuti kami di Twitter" placement="topLeft">
            <a href="https://www.twitter.com/plasgos" target="_blank" rel="noopener noreferrer"><FaTwitterSquare  style={{fontSize:32, color:'#00aced'}} /></a>
          </Tooltip>
        </div>
      </Footer>
    );
  }
}

export default FooterAuth;
