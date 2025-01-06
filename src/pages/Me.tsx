import Navigation from "@/components/Navigation";
import { ChevronRight, Briefcase, Bookmark, Image, Video, CreditCard, Smile, Settings } from "lucide-react";

const menuItems = [
  { id: "services", icon: Briefcase, title: "服务" },
  { id: "favorites", icon: Bookmark, title: "收藏" },
  { id: "moments", icon: Image, title: "朋友圈" },
  { id: "channels", icon: Video, title: "视频号" },
  { id: "cards", icon: CreditCard, title: "卡包" },
  { id: "stickers", icon: Smile, title: "表情" },
  { id: "settings", icon: Settings, title: "设置" },
];

const Me = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-4 pb-16">
        <div className="bg-white p-4 flex items-center space-x-4 mb-3">
          <img
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
            alt="Profile"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-medium">海军</h2>
            <div className="flex items-center text-gray-500 mt-1">
              <span className="text-sm">微信号：daxin261</span>
            </div>
            <div className="flex items-center mt-2">
              <button className="px-3 py-1 border border-gray-200 rounded-full text-sm mr-2">
                + 状态
              </button>
              <div className="flex items-center space-x-1">
                <img src="/placeholder.svg" alt="" className="w-6 h-6 rounded-full" />
                <span className="text-sm">等 6 个朋友</span>
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`bg-white flex items-center justify-between p-4 ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              } ${index === 0 || index === 3 || index === 5 ? "mt-3" : ""}`}
            >
              <div className="flex items-center space-x-4">
                <IconComponent className="w-6 h-6 text-gray-600" />
                <span>{item.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          );
        })}
      </div>

      <Navigation />
    </div>
  );
};

export default Me;