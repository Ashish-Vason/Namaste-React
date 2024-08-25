import React, { useEffect, useState } from 'react';
import { YOUTUBE_SUGGESTIONS_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { cacheSuggestions } from '../utils/searchSlice';

const AutoSuggestions = ({ searchQuery }) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const cacheResults = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    // debouncing
    // fire the API After 200ms
    // if any call is before the 200ms
    // decline the API Call by clearing and destroying the function
    const timer = setTimeout(() => {
      fetchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const fetchSuggestions = async () => {
    if (cacheResults[searchQuery]) {
      setSearchSuggestions(cacheResults[searchQuery]);
    } else {
      const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
      const json = await data.json();
      console.log(json[1], 'autosuggestion');
      setSearchSuggestions(json[1]);
      // update the redux store
      dispatch(
        cacheSuggestions({
          [searchQuery]: json[1],
        })
      );
    }
  };
  return (
    searchSuggestions && (
      <div className="absolute top-12 left-2 bg-gray-100 w-[93%] rounded-md">
        <ul>
          {searchSuggestions.map((suggestions) => (
            <div>
              <li className="px-3 py-1 hover:bg-gray-200 cursor-pointer">
                {suggestions}
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  );
};

export default AutoSuggestions;
