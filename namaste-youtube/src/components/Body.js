import React from 'react';
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* Video Container */}
      <Outlet />
    </div>
  );
};

export default Body;
