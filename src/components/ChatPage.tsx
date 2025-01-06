import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Smile, Plus, X } from "lucide-react";

const messages = [
  { id: 1, text: "准备准备过年了", sender: "them", time: "12:00", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: 2, text: "牛", sender: "me", time: "12:01", avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
  { id: 3, text: "这军火可以", sender: "me", time: "12:01", avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
  { id: 4, text: "哈哈", sender: "them", time: "12:02", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: 5, text: "25*24", sender: "them", time: "12:02", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: 6, text: "可以", sender: "me", time: "12:03", avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
  { id: 7, text: "你几号走", sender: "me", time: "12:03", avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
  { id: 8, text: "7号", sender: "them", time: "12:04", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: 9, text: "嗯嗯 我8号", sender: "me", time: "12:04", avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
];

const emojis = ["😊", "😂", "🤣", "❤️", "😍", "🙌", "👍", "😭", "😘", "🤔", "😅", "😉", "🎉", "✨", "🌟"];

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setNewMessage("");
    setShowEmojis(false);
  };

  const handleEmojiSelect = (emoji: string) => {
    setNewMessage(prev => prev + emoji);
  };

  return (
    <div className="flex flex-col h-screen bg-wechat-bg">
      <div className="flex items-center p-4 bg-white border-b border-wechat-border">
        <button onClick={() => navigate(-1)} className="mr-4">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">张雷红</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${
              message.sender === "me" ? "flex-row-reverse space-x-reverse" : "flex-row"
            }`}
          >
            <img
              src={message.avatar}
              alt={message.sender}
              className="w-10 h-10 rounded-lg object-cover"
            />
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

      <form
        onSubmit={handleSend}
        className="relative flex items-center p-4 bg-white border-t border-wechat-border"
      >
        <button 
          type="button" 
          className="p-2"
          onClick={() => setShowEmojis(!showEmojis)}
        >
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

        {showEmojis && (
          <div className="absolute bottom-full left-0 w-full bg-white border border-gray-200 p-4 rounded-t-lg shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Emojis</span>
              <button 
                type="button"
                onClick={() => setShowEmojis(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-8 gap-2">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleEmojiSelect(emoji)}
                  className="text-2xl hover:bg-gray-100 p-1 rounded"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ChatPage;