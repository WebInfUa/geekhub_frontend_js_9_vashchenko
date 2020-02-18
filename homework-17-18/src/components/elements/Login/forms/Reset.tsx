import React from 'react';
import {Link} from "react-router-dom";

const Reset = () => {
  return (
  <div>
    <h1 className="fadeIn first">Reset password</h1>
    <form>
      <input type="text" className="fadeIn first" name="email" placeholder="Enter your email"/>
      <input type="text" className="fadeIn second" name="passwords" placeholder="Enter your password"/>
      <input type="text" className="fadeIn third" name="passwordsConfirm" placeholder="Confirm your password"/>
      <Link to='/login'>
        <input onClick={() => console.log('Log in form')} type='button' className="fadeIn fourth" value="Reset"/>
      </Link>
    </form>
  </div>);
};

export default Reset;
