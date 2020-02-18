import React from 'react';
import {Link} from 'react-router-dom';

// Images and style
import Logo from '../../../assets/images/logo.png';
import Avatar from '../../../assets/images/avatar.png';
import search from '../../../assets/images/icons/search.png'
import bell from '../../../assets/images/icons/bell.png'

import './main.scss';

// Temporary Data
const UserName = 'Vashchenko Alex';
const UserEmail = 'vashchenko@alex.com  ';

const  Header = () => {
  const classStatus: string = 'header__profile-dropdown dropdown ';
  
  return (
  <header className='header'>
    <div className='header__nav-btn'>
      <div className='header__nav-btn-middle'></div>
    </div>
    <div className='header__logo'>
      <Link to='/app'>
        <p className='header__logo-wrapper'>
          <img className='header__logo-img' src={Logo} alt='Virtus dashboard Logo'/>
        </p>
      </Link>
    </div>
    <div className='header__buttons-wrapper'>
      <Link to='/project'>
        <button className='header__add-btn header_margin-right'>
          <span className='header__add-btn-text'>Add</span>
          <span className='header__add-btn-sign'>+</span>
        </button>
      </Link>
      
      <div className='header__form header_margin-right'>
        <img src={search} alt='Search'/>
      </div>
      
      <Link to='/thread'>
        <div className='header__notify-btn header_margin-right'>
          <img src={bell} alt='Notification'/>
        </div>
      </Link>

      {/*NEED ADDED active CLASS ON CLICK*/}
      <div className={classStatus}  data-dropdown="profile">
        <div className='header__profile-btn dropdown__btn'>
          <div className='header__profile-btn-img'>
            <img className='img-responsive' src={Avatar} alt='Profile avatar'/>
          </div>
        </div>
        <ul className='header__profile-dropdown-container dropdown__list' >
          <li className='header__profile-dropdown-option'>{UserName}</li>
          <li className='header__profile-dropdown-option'>{UserEmail}</li>
          <hr />
          <Link to='/'>
            <li className='header__profile-dropdown-option'>Log out</li>
          </Link>
        </ul>
      </div>
  
    </div>
  </header>
    );
};

export default Header;
