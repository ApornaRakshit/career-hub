import React from "react";
import { CubeIcon } from '@heroicons/react/24/solid'
import {  NavLink } from 'react-router-dom'
const Header = () =>{
  return(
    <div className="flex items-center justify-between">
       <div className="inline-flex items-center">
        <CubeIcon className="h-6 w-6 text-blue-500" />
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
          CRAFTCO
        </span>
       </div>
       {/* Nav Items Section */}
       <ul className='items-center hidden space-x-8 lg:flex'>
          <div className="inline-flex space-x-8">
            <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/apply'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
          </div>
          <li>
            <NavLink
              to='/starApply'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Star Apply
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Header;