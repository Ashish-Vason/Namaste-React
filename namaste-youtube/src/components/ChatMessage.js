import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex my-2 shadow-sm">
      <img
        className="w-8 h-8 rounded-full border border-black mr-3"
        src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
        alt="avatar"
      />
      <div>
        <h1 className="text-md font-bold">{name}</h1>
        <p className="">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
