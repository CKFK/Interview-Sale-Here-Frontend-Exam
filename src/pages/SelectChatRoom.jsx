import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectChatRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const handleCreateChatRoom = () => {
    navigate("/create-chat-room", {
      replace: true,
      state: { name: state?.name },
    });
  };

  const handleJoinChatRoom = () => {
    navigate("/join-chat-room", {
      replace: true,
      state: { name: state?.name },
    });
  };

  return (
    <div className="form-layout-center">
      <div className="form-group">
        <h1 className="title">คุณ {state?.name}</h1>
        <div className="btn-group">
          <button
            className="button-lg"
            type="submit"
            onClick={handleCreateChatRoom}
          >
            สร้างห้องใหม่
          </button>
          <button
            className="text-button-lg"
            type="submit"
            onClick={handleJoinChatRoom}
          >
            เข้าร่วมแชท
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectChatRoom;
