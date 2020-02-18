import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

// style and images
import './style/login.scss'
import Logo from '../../../assets/images/logo.png'

// Components
import Menu from './Menu';
import LogIn from './forms/LogIn';
import Reset from './forms/Reset';
import SignUp from './forms/SignUp';


const Login = () => {
  return (
    <BrowserRouter>
      <div className='wrapper fadeInDown'>
        <div className='formContent'>

          <Menu />

          <div className='fadeIn first'>
            <Link to='/login'>
              <img src={Logo} alt='Welcome to Virtus Dashboard'/>
            </Link>
          </div>
          
          <Route path='/login' component={LogIn}/>
          <Route path='/reset' component={Reset}/>
          <Route path='/signup' component={SignUp}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Login;
