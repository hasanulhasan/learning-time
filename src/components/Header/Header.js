import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <NavLink rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 text-4xl"> Be Fast </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink rel="noopener noreferrer" to='/' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-3xl">Home</NavLink>
            </li>
            <li className="flex">
              <NavLink rel="noopener noreferrer" to='/statistics' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-3xl">Statistics</NavLink>
            </li>
            <li className="flex">
              <NavLink rel="noopener noreferrer" to='/blog' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-3xl">Blog</NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Blog</button>
          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;