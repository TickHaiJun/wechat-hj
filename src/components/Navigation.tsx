import { MessageCircle, Users, Compass, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const tabs = [
    { name: "WeChat", icon: MessageCircle, path: "/" },
    { name: "Contacts", icon: Users, path: "/contacts" },
    { name: "Discover", icon: Compass, path: "/discover" },
    { name: "Me", icon: User, path: "/me" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-wechat-border">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.name}
              to={tab.path}
              className={`flex flex-col items-center space-y-1 ${
                isActive ? "text-wechat-primary" : "text-gray-500"
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span className="text-xs">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;