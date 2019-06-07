import React from 'react';
import { isMobile } from "react-device-detect";
import LoginPage from './components/web-views/accountpage/loginpage/LoginPage';
import MobileLoginPage from './components/mobile-views/accountpage/loginpage/LoginPage';

function App() {
  if (isMobile) {
    return <MobileLoginPage />;
  }else{
    return <LoginPage />;
  }
}

export default App;
