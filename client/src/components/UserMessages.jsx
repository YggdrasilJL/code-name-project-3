import React from "react";

const UserMessages = ({ messages, newMessage, handleNewMessageChange, handleSendMessage }) => {
  return (
    <div>
      <ul className="list-none">
        {messages.map((message) => (
          <li key={message.id} className="mb-2">
            {/* Display existing messages */}
            <div className="font-semibold">{message.user}</div>
            <div>{message.content}</div>
          </li>
        ))}
        <li>
          {/* Input field messages */}
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={handleNewMessageChange}
            className="border-gray-300 rounded-md p-2 w-full"
          />
          {/* Submit */}
          <button
            onClick={handleSendMessage}
            className="bg-black text-white py-2 px-4 rounded-md mt-2"
          >
            Send
          </button>

          
        </li>
      </ul>
    </div>
  );
};

export default UserMessages;
