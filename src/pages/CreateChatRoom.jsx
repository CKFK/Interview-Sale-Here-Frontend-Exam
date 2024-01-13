import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateChatRoom = () => {
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

  const handleSubmitChatRoom = () => {
    navigate("/chat-room", {
      replace: true,
      state: { name: state?.name, roomName: roomName },
    });
  };

  return (
    <div className="form-layout">
      <div className="form-group">
        <h1 className="title">สร้างห้องใหม่</h1>
        <input
          className="input"
          onChange={handleChatRoomNameInput}
          value={roomName}
        />
        <button className="text-button" onClick={handleSelectChatRoom}>
          กลับ
        </button>
        <button className="button" type="submit" onClick={handleSubmitChatRoom}>
          ยืนยัน
        </button>
      </div>
    </div>
  );
};

export default CreateChatRoom;
