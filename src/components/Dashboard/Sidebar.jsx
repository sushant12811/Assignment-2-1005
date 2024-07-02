import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaNewspaper, FaSun, FaChartLine, FaUser } from 'react-icons/fa';

const Sidebar = ({ sidebarToggle, username }) => {
  return (
    //Toggle to sidebar
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
      <div>
        <h1 className="text-2xl text-white font-bold">Welcome</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/" className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
            Home
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/profile" className='px-3'>
            <FaUser className='inline-block w-6 h-6 mr-2 -mt-2'></FaUser>
            Profile
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/newfeed" className='px-3'>
            <FaNewspaper className='inline-block w-6 h-6 mr-2 -mt-2'></FaNewspaper>
            NewsFeed
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/weather" className='px-3'>
            <FaSun className='inline-block w-6 h-6 mr-2 -mt-2'></FaSun>
            Weather
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/stocks" className='px-3'>
            <FaChartLine className='inline-block w-6 h-6 mr-2 -mt-2'></FaChartLine>
            Stocks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;