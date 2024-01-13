import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterChatRoom = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [showButton, setShowButton] = useState(false);

  const handleNameInput = (e) => {
    const value = e.target.value;
    const checkShowButton = value.length > 0;
    setName(value);
    setShowButton(checkShowButton);
  };

  const handleSubmit = () => {
    navigate("/select-chat-room", {
      replace: true,
      state: { name: name },
    });
  };

  return (
    <form className="form-layout">
      <div className="form-group">
        <h1 className="title">ชื่อของคุณ</h1>
        <input className="input" onChange={handleNameInput} value={name} />
        {showButton && (
          <button className="button-animate" type="submit" onClick={handleSubmit}>
            ยืนยัน
          </button>
        )}
      </div>
    </form>
  );
};

export default EnterChatRoom;
