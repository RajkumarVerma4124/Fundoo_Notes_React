import React, { useState } from 'react'
import './App.css';
import ForgotPassword from './pages/forgotpassword/forgotpassword';
import SignIn from './pages/signin/signin';
import ResetPassword from './pages/resetpassword/resetpassword';


function App() {
  return (
    <div className="">
      {/* <SignIn /> */}
      <ForgotPassword />
      {/* <ResetPassword/> */}
    </div>
  );
}

export default App;
