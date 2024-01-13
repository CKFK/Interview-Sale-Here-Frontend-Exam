import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SelectChatRoom = () => {
  const location = useLocation();
  
  const state = location.state;
  const [inputChat, setInputChat] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      name: state?.name,
      message: "สวัสดี",
    },
  ]);

  const handleChat = (e) => {
    const message = e.target.value;
    if (e.keyCode === 13) {
      setChatMessages([
        ...chatMessages,
        {
          name: state?.name,
          message: message,
        },
      ]);
      setInputChat("");
    } else {
      setInputChat(message);
    }
  };

  return (
    <div className="form-layout-chat-room">
      <h1 className="title-room">ห้อง {state?.roomName}</h1>
      <div className="form-chat">
        <div className="message-container">
          {chatMessages.map((item, index) => (
            <div key={index} className="message-group">
              <div className="label">คุณ {item.name}</div>
              <div className="message">{item.message}</div>
            </div>
          ))}
        </div>
        <input
          className="input-chat"
          placeholder="Enter เพื่อส่ง"
          onChange={handleChat}
          onKeyDown={handleChat}
          value={inputChat}
        />
      </div>
    </div>
  );
};

export default SelectChatRoom;
