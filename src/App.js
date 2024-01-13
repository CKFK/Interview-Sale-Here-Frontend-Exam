import React from "react";
import Layout from './components/layout/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterChatRoom from './pages/EnterChatRoom'
import SelectChatRoom from './pages/SelectChatRoom'
import CreateChatRoom from './pages/CreateChatRoom'
import JoinChatRoom from './pages/JoinChatRoom'
import ChatRoom from './pages/ChatRoom'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<EnterChatRoom />} /> 
            <Route path="/select-chat-room" element={<SelectChatRoom />} /> 
            <Route path="/create-chat-room" element={<CreateChatRoom />} /> 
            <Route path="/join-chat-room" element={<JoinChatRoom />} /> 
            <Route path="/chat-room" element={<ChatRoom />} /> 
            <Route path="*" element={<p>ไม่พบหน้าที่คุณค้นหา</p>} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
