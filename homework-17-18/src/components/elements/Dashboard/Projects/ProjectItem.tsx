import React from 'react';

// Images and style
import dots from '../../../../assets/images/icons/dots-vertical.png'
import avatar1 from '../../../../assets/images/avatar1.png'


const ProjectItem = () => {
  return (
  <tr>
    <td className='project-table__body--title'>
      <p>New web site</p>
      <p>Microsoft</p>
    </td>
    <td>$2300</td>
    <td>
      <p>15 May 2016</p>
      <p>10 day left</p>
    </td>
    <td>40 hours</td>
    <td className='project-table__body--progress'>
      <span>70%</span>
      <progress max="100" value="70">70%</progress>
    </td>
    <td>Development</td>
    <td className='project-table__body--assigned'>
      <img src={avatar1} alt='Current user on project avatar'/>
      <div>
        <p>Dominic Lynton</p>
        <p>Front End Dev</p>
      </div>
    </td>
    <td className='action-menu'>
      <ul>
        <li className='action-menu__item'><img src={dots} alt='Header sub menu'/>
          <ul className='action-menu__submenu'>
            <li>Remove project</li>
            <li>Planing</li>
            <li>Design</li>
            <li>Development</li>
            <li>Completed</li>
          </ul>
        </li>
      </ul>
    </td>
  </tr>
  );
};

export default ProjectItem;
