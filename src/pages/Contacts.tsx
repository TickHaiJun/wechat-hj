import Navigation from "@/components/Navigation";
import { Search, UserPlus, Users, Tag, Newspaper, UserCog, Building, Star } from "lucide-react";

const contactSections = [
  {
    id: "new",
    icon: <UserPlus className="w-12 h-12 p-2 bg-orange-400 text-white rounded-lg" />,
    title: "新的朋友",
  },
  {
    id: "recent",
    icon: <Users className="w-12 h-12 p-2 bg-orange-300 text-white rounded-lg" />,
    title: "仅聊天的朋友",
  },
  {
    id: "groups",
    icon: <Users className="w-12 h-12 p-2 bg-green-500 text-white rounded-lg" />,
    title: "群聊",
  },
  {
    id: "tags",
    icon: <Tag className="w-12 h-12 p-2 bg-blue-500 text-white rounded-lg" />,
    title: "标签",
  },
  {
    id: "official",
    icon: <Newspaper className="w-12 h-12 p-2 bg-blue-500 text-white rounded-lg" />,
    title: "公众号",
  },
  {
    id: "service",
    icon: <UserCog className="w-12 h-12 p-2 bg-blue-500 text-white rounded-lg" />,
    title: "服务号",
  },
  {
    id: "enterprise",
    icon: <Building className="w-12 h-12 p-2 bg-blue-500 text-white rounded-lg" />,
    title: "企业微信联系人",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex justify-between items-center p-4 border-b border-wechat-border">
          <h1 className="text-xl font-medium text-center flex-1">通讯录</h1>
          <UserPlus className="w-6 h-6 text-black" />
        </div>
        
        <div className="p-3">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索"
              className="bg-transparent border-none focus:outline-none ml-2 text-sm flex-1"
            />
          </div>
        </div>
      </div>

      <div className="pt-28 pb-16">
        {contactSections.map((section) => (
          <div
            key={section.id}
            className="flex items-center p-3 space-x-4 border-b border-gray-100"
          >
            {section.icon}
            <span className="text-base">{section.title}</span>
          </div>
        ))}

        <div className="mt-4 border-t border-gray-100">
          <div className="p-3 bg-gray-50 text-sm text-gray-500">我的企业</div>
          <div className="flex items-center p-3 space-x-4 border-b border-gray-100">
            <Building className="w-12 h-12 p-2 bg-blue-500 text-white rounded-lg" />
            <span className="text-base">企业微信通知</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center p-3 space-x-4 border-b border-gray-100">
            <Star className="w-12 h-12 p-2 bg-yellow-500 text-white rounded-lg" />
            <span className="text-base">星标朋友</span>
          </div>
        </div>
      </div>

      <div className="fixed right-1 top-1/2 transform -translate-y-1/2 flex flex-col text-xs text-gray-400">
        {alphabet.map((letter) => (
          <span key={letter} className="py-0.5">{letter}</span>
        ))}
      </div>

      <Navigation />
    </div>
  );
};

export default Contacts;