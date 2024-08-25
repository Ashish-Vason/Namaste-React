import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="text-center mt-9">
      <img
        src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"
        alt=""
        className="w-80 mx-auto"
      />
      <h2 className="font-bold text-2xl my-2">
        Your Payment is successful. Thanks for shopping with us.
      </h2>
      <button className="bg-green-500 px-3 py-1 mt-2 text-white">
        <Link to="/">Return to Home page </Link>
      </button>
    </div>
  );
};

export default SuccessPage;
