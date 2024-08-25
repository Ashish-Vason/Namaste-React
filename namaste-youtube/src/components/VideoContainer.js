import React, { useEffect, useState } from 'react';
import { YOUTUBE_ENDPOINT } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    handleYtApi();
  }, []);

  const handleYtApi = async () => {
    const data = await fetch(YOUTUBE_ENDPOINT);
    console.log(data);
    const json = await data.json();
    console.log(json?.items);
    const { items } = json;
    setVideos(items);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
