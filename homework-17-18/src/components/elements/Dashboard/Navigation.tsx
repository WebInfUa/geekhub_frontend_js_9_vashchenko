import React from 'react';
import {Link} from 'react-router-dom';

import home from '../../../assets/images/icons/home-disable.png';
import homeActive from '../../../assets/images/icons/home-active.png';
import thread from '../../../assets/images/icons/thread-disable.png';
import threadActive from '../../../assets/images/icons/thread-active.png';
import trends from '../../../assets/images/icons/trending-disable.png';
import trendsActive from '../../../assets/images/icons/trending-active.png';
import project from '../../../assets/images/icons/project-disable.png';
import projectActive from '../../../assets/images/icons/project-active.png';
import contacts from '../../../assets/images/icons/contacts-disable.png';


const  Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <Link to='/app'>
          <li className="nav__item">
            <img src={home} alt='go to home page'
                 onMouseOver={e => (e.currentTarget.src = homeActive)}
                 onMouseOut={e => (e.currentTarget.src = home)}/>
          </li>
        </Link>
        <Link to='/project'>
          <li className="nav__item">
            <img src={project} alt='go to home page'
                 onMouseOver={e => (e.currentTarget.src = projectActive)}
                 onMouseOut={e => (e.currentTarget.src = project)}/>
          </li>
        </Link>
        <Link to='/analytic'>
          <li className="nav__item">
            <img src={trends} alt='go to home page'
                 onMouseOver={e => (e.currentTarget.src = trendsActive)}
                 onMouseOut={e => (e.currentTarget.src = trends)}/>
          </li>
        </Link>
        <Link to='/thread'>
          <li className="nav__item">
            <img src={thread} alt='go to home page'
                 onMouseOver={e => (e.currentTarget.src = threadActive)}
                 onMouseOut={e => (e.currentTarget.src = thread)}/>
          </li>
        </Link>
        <Link to='/contacts'>
          <li className="nav__item">
            <img src={contacts} alt='go to home page'
                 onMouseOver={e => (e.currentTarget.src = contacts)}/>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
