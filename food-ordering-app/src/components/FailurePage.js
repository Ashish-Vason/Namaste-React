import React from 'react';
import { Link } from 'react-router-dom';

const FailurePage = () => {
  return (
    <div className="text-center">
      <img
        src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
        alt=""
        className="w-80 mx-auto my-4"
      />
      <h2 className="text-2xl font-bold">
        Your payment has been failed. Please try again!
      </h2>
      <button className="bg-yellow-500 px-3 py-1 mt-2 text-white">
        <Link to="/">Return to Home page </Link>
      </button>
    </div>
  );
};

export default FailurePage;
