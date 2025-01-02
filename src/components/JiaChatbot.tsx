import React, { useState } from 'react';

const JiaChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" aria-label="Jia Chatbot">
      {/* Chatbox */}
      {isOpen && (
        <div className="bg-white w-64 h-80 shadow-lg rounded-lg flex flex-col p-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b">
            <h2 className="text-lg font-bold text-gray-800">Jia</h2>
            <button
              onClick={toggleChat}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Close Chatbox"
            >
              ✖
            </button>
          </div>
          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-2">
            <p className="text-gray-600 text-sm italic">Hi there! How can I assist you today?</p>
          </div>
          {/* Chat Input */}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>
      )}

      {/* Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Open Jia Chatbot"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default JiaChatbot;
