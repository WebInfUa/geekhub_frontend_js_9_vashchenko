import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Analytic from "./Analytic/Analytic";
import Thread from "./Thread/Thread";
import Contacts from "./Contacts/Contacts";

const Main = () => {
  
  return (
    <BrowserRouter>
      <Header />
  
      <div className='content-wrapper'>
        <Navigation />
        
        <Route path='/app' component={Home}/>
        <Route path='/project' component={Projects}/>
        <Route path='/analytic' component={Analytic}/>
        <Route path='/thread' component={Thread}/>
        <Route path='/contacts' component={Contacts}/>
      </div>
    </BrowserRouter>
  );
  
};

export default Main;
