import React from 'react';

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  console.log(info);
  return (
    <div className="m-5 w-72">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <div>
        <h1 className="font-bold text-left truncate whitespace-pre-wrap">
          {title}
        </h1>
        <p className="text-gray-600">{channelTitle}</p>
        <p className="text-gray-600">{statistics.viewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
