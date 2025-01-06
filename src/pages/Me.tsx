import Navigation from "@/components/Navigation";

const Me = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-wechat-border p-4">
        <h1 className="text-xl font-medium text-center">Me</h1>
      </div>
      <div className="pt-16 pb-16">
        <div className="p-4 text-center text-gray-500">
          Profile page coming soon
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Me;