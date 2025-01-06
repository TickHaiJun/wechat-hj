import Navigation from "@/components/Navigation";
import { ChevronRight, Image, Video, Music, AppWindow } from "lucide-react";
import { useNavigate } from "react-router-dom";

const discoverItems = [
  {
    id: "moments",
    title: "朋友圈",
    icon: Image,
    preview: "/placeholder.svg",
    hasNotification: true,
    link: "/moments"
  },
  {
    id: "channels",
    title: "视频号",
    icon: Video,
    preview: {
      image: "/placeholder.svg",
      name: "张雷红",
      hasHeart: true
    },
    hasNotification: true
  },
  {
    id: "listen",
    title: "听一听",
    icon: Music
  },
  {
    id: "miniPrograms",
    title: "小程序",
    icon: AppWindow
  }
];

const Discover = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-wechat-border p-4 z-10">
        <h1 className="text-xl font-medium text-center">发现</h1>
      </div>

      <div className="pt-16 pb-16">
        {discoverItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`bg-white flex items-center justify-between p-4 ${
                index !== discoverItems.length - 1 ? "border-b border-gray-100" : ""
              } cursor-pointer`}
              onClick={() => item.link && navigate(item.link)}
            >
              <div className="flex items-center space-x-4">
                <IconComponent className="w-6 h-6 text-gray-600" />
                <span>{item.title}</span>
              </div>
              <div className="flex items-center">
                {item.preview && typeof item.preview === "string" && (
                  <img
                    src={item.preview}
                    alt=""
                    className="w-10 h-10 rounded-md mr-2 object-cover"
                  />
                )}
                {item.preview && typeof item.preview === "object" && (
                  <div className="flex items-center mr-2">
                    <img
                      src={item.preview.image}
                      alt=""
                      className="w-10 h-10 rounded-md object-cover"
                    />
                    <span className="ml-2">{item.preview.name}</span>
                    {item.preview.hasHeart && <span className="ml-1">❤️</span>}
                  </div>
                )}
                {item.hasNotification && (
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          );
        })}
      </div>

      <Navigation />
    </div>
  );
};

export default Discover;