import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeToggle } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const dispatch = useDispatch();
  const params = useSearchParams();
  console.log(params[0].get('v'));
  useEffect(() => {
    dispatch(closeToggle());
  }, []);
  return (
    <div className="px-5 mt-5 w-full">
      <div className="flex">
        <div className="w-full">
          <iframe
            width="1000"
            height="450"
            src={`https://www.youtube.com/embed/${params[0].get(
              'v'
            )}?si=xahmsLOToB_g4NYd`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="mt-3">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
