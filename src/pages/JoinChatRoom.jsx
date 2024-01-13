import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JoinChatRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const state = location.state;

  const handleChatRoomNameInput = (e) => {
    const value = e.target.value;
    setRoomName(value);
  };

  const handleSelectChatRoom = () => {
    navigate("/select-chat-room", {
      replace: true,
      state: { name: state?.name },
    });
  };

  const handleJoinChatRoom = () => {
    navigate("/chat-room", {
      replace: true,
      state: { name: state?.name, roomName: roomName, ...location.state },
    });
  };

  return (
    <div className="form-layout">
      <h1 className="title">เข้าร่วมแชท</h1>
      <input
        className="input"
        onChange={handleChatRoomNameInput}
        value={roomName}
      />
      <button className="text-button" onClick={handleSelectChatRoom}>
        กลับ
      </button>
      <button className="button" type="submit" onClick={handleJoinChatRoom}>
        เข้าร่วม
      </button>
    </div>
  );
};

export default JoinChatRoom;
