import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Smile, Plus } from "lucide-react";

const messages = [
  { id: 1, text: "准备准备过年了", sender: "them", time: "12:00" },
  { id: 2, text: "牛", sender: "me", time: "12:01" },
  { id: 3, text: "这军火可以", sender: "me", time: "12:01" },
  { id: 4, text: "哈哈", sender: "them", time: "12:02" },
  { id: 5, text: "25*24", sender: "them", time: "12:02" },
  { id: 6, text: "可以", sender: "me", time: "12:03" },
  { id: 7, text: "你几号走", sender: "me", time: "12:03" },
  { id: 8, text: "7号", sender: "them", time: "12:04" },
  { id: 9, text: "嗯嗯 我8号", sender: "me", time: "12:04" },
];

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // In a real app, you would send the message to a backend
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-wechat-bg">
      {/* Header */}
      <div className="flex items-center p-4 bg-white border-b border-wechat-border">
        <button onClick={() => navigate(-1)} className="mr-4">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">张雷红</h1>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-2xl ${
                message.sender === "me"
                  ? "bg-wechat-bubble"
                  : "bg-white"
              }`}
            >
              <p className="text-wechat-text">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="flex items-center p-4 bg-white border-t border-wechat-border"
      >
        <button type="button" className="p-2">
          <Smile className="w-6 h-6 text-gray-500" />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 mx-4 p-2 rounded-full bg-wechat-lightgray focus:outline-none"
        />
        <button type="button" className="p-2">
          <Plus className="w-6 h-6 text-gray-500" />
        </button>
      </form>
    </div>
  );
};

export default ChatPage;