import ChatList from "@/components/ChatList";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-wechat-border p-4">
        <h1 className="text-xl font-medium text-center">WeChat</h1>
      </div>
      <div className="pt-16">
        <ChatList />
      </div>
      <Navigation />
    </div>
  );
};

export default Index;