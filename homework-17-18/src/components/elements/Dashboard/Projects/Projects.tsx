import React from 'react';
import {Link} from "react-router-dom";

// Components
import ProjectItem from "./ProjectItem";

// image and style
import './projects.scss'

const projectQTY: number = 123;

const Projects = () => {
  return (
    <div className='main-projects'>
      <div className='submenu'>
        <div className='submenu__buttons '>
          <Link to='/project'>
            <span className='submenu__button submenu__button_active '>All Projects ({projectQTY})</span>
          </Link>
          
          <Link to='/workflow'>
            <span className='submenu__button '>Workflow</span>
          </Link>
        </div>
        <div className='info-navigation__sort'>
          <label>Show project:</label>
          <select>
            <option>All</option>
            <option>Quened</option>
            <option>Planing</option>
            <option>Design</option>
            <option>Development</option>
            <option>Completed</option>
          </select>
        </div>
      </div>
      <div className='project'>
        <table cellSpacing='100' className='project-table'>
          <thead>
          <tr className='project-table__header'>
            <th className='project-table__header--title'>Project title</th>
            <th>Value</th>
            <th>Deadline</th>
            <th>Time spent</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Assigned to</th>
            <th hidden>Action</th>
          </tr>
          </thead>
      
          <tbody className='project-table__body'>
           
            <ProjectItem />
          
          </tbody>
        </table>
      </div>
      </div>
  );
};

export default Projects;
