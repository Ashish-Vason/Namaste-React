import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const toggleBtn = useSelector((store) => store.app.toggleBtn);
  return (
    toggleBtn && (
      <div className="shadow-md w-[10%] text-center h-[86vh] p-3">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Live Video</li>
          <hr></hr>
          <li>My Video</li>
          <li>My Playlist</li>
          <li>Watch History</li>
          <li>Liked Videos</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
