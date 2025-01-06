import { Link } from "react-router-dom";

const chats = [
  {
    id: 1,
    name: "张雷红",
    avatar: "/placeholder.svg",
    lastMessage: "准备准备过年了",
    time: "2024年6月5日",
  },
  {
    id: 2,
    name: "同源",
    avatar: "/placeholder.svg",
    lastMessage: "[图片]",
    time: "6月4日",
  },
  {
    id: 3,
    name: "老鱼简历",
    avatar: "/placeholder.svg",
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