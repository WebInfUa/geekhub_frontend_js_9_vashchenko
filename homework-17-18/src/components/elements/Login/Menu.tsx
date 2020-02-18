import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
  return (
  <div>
    <Link to='/login'>
      <h2 className="inactive underlineHover"> Log In </h2>
    </Link>
    <Link to='/reset'>
      <h2 className="inactive underlineHover"> Reset </h2>
    </Link>
    <Link to='/signup'>
      <h2 className="inactive underlineHover"> Sign Up </h2>
    </Link>
  </div>
  );
};

export default Login;
