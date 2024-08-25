import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { addLiveMessage, addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  generateRandomName,
  generateRandomText,
} from '../utils/constFunctions';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  const [liveMessage, setLiveMessage] = useState('');
  useEffect(() => {
    // fetchdata - push the chat data
    setInterval(() => {
      console.log('Api polling');
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(20),
        })
      );
    }, 1000);
  }, []);
  return (
    <>
      <div className="mx-2 p-3 w-full border border-black h-[450px] rounded-md overflow-y-scroll flex flex-col-reverse">
        {chatMessage &&
          chatMessage.map(({ name, message }) => (
            <ChatMessage name={name} message={message} />
          ))}
      </div>
      <form
        className="flex ml-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addLiveMessage({
              name: 'Ashish Vason',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input
          type="text"
          className="p-3 border border-black w-[100%]"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-green-300 px-3">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
