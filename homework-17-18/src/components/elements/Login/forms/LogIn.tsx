import React from 'react';
import {Link} from "react-router-dom";

const LogIn = () => {
  return (
  <div>
    <h1 className="fadeIn first">Log In</h1>
    <form>
      <input type="text" id="email" className="fadeIn first" name="email" placeholder="Enter your email"/>
      <input type="text" id="password" className="fadeIn second" name="passwords" placeholder="Enter your password"/>
      <label className="fadeIn third">Remember me:
        <input name="isGoing" type="checkbox" onChange={() => console.log('Remember me check')} />
      </label>
      <Link to='/app'>
        <input onClick={() => console.log('Log in form')} type='button' className="fadeIn third" value="Log In"/>
      </Link>
    </form>
  </div>);
};

export default LogIn;
