import { ArrowLeft, Camera, Image as ImageIcon, MessageSquare, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Moments = () => {
  const navigate = useNavigate();

  const moments = [
    {
      id: 1,
      user: {
        name: "张三",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      },
      content: "今天天气真好！",
      images: [
        "https://source.unsplash.com/random/800x600?nature",
        "https://source.unsplash.com/random/800x600?city",
      ],
      time: "5分钟前",
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      user: {
        name: "李四",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      content: "周末去爬山真开心！",
      images: [
        "https://source.unsplash.com/random/800x600?mountain",
      ],
      time: "2小时前",
      likes: 25,
      comments: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-transparent z-10 p-4 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)}
          className="text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex space-x-4">
          <button className="text-white">
            <Camera className="w-6 h-6" />
          </button>
          <button className="text-white">
            <ImageIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative h-72">
        <img
          src="https://source.unsplash.com/random/1200x800?landscape"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 text-white flex items-center space-x-2">
          <span className="text-lg font-medium">我</span>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Me"
            alt="My Avatar"
            className="w-16 h-16 rounded-md object-cover"
          />
        </div>
      </div>

      {/* Moments List */}
      <div className="pt-4">
        {moments.map((moment) => (
          <div key={moment.id} className="px-4 py-3 border-b border-gray-800">
            <div className="flex space-x-3">
              <img
                src={moment.user.avatar}
                alt={moment.user.name}
                className="w-12 h-12 rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-white font-medium">{moment.user.name}</h3>
                <p className="text-white mt-1">{moment.content}</p>
                <div className="grid grid-cols-3 gap-1 mt-2">
                  {moment.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Moment ${index + 1}`}
                      className="w-full aspect-square object-cover rounded-md"
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 text-sm">{moment.time}</span>
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-500 flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{moment.likes}</span>
                    </button>
                    <button className="text-gray-500 flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{moment.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Padding for bottom spacing */}
      <div className="h-16" />
    </div>
  );
};

export default Moments;