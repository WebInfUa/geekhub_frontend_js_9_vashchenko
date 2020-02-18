import React from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
  <div>
    <h1 className="fadeIn first">Create new account</h1>
    <form>
      <input type="text" className="fadeIn first" name="name" placeholder="Enter your name"/>
      <input type="text" className="fadeIn first" name="email" placeholder="Enter your email"/>
      <input type="text" className="fadeIn second" name="passwords" placeholder="Enter your password"/>
      <input type="text" className="fadeIn third" name="passwordsConfirm" placeholder="Confirm your password"/>
      <Link to='/login'>
        <input onClick={() => console.log('Sign up form')} type='button' className="fadeIn fourth" value="Sign Up"/>
      </Link>
    </form>
  </div>);
};

export default SignUp;
