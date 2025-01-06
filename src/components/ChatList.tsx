import { Link } from "react-router-dom";

const chats = [
  {
    id: 1,
    name: "张雷红",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    lastMessage: "准备准备过年了",
    time: "2024年6月5日",
  },
  {
    id: 2,
    name: "同源",
    avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    lastMessage: "[图片]",
    time: "6月4日",
  },
  {
    id: 3,
    name: "老鱼简历",
    avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    lastMessage: "老鱼简历新惊喜，还有什么是你不知道的？",
    time: "5月30日",
  },
];

const ChatList = () => {
  return (
    <div className="pb-16">
      {chats.map((chat) => (
        <Link
          key={chat.id}
          to={`/chat/${chat.id}`}
          className="flex items-center p-4 space-x-4 border-b border-wechat-border hover:bg-wechat-lightgray"
        >
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-wechat-text">{chat.name}</h3>
              <span className="text-sm text-gray-500">{chat.time}</span>
            </div>
            <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatList;