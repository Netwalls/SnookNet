import React from "react";

const UsernameHolder = ({ username }: { username: string }) => {
  return (
    <div className="absolute top-0 right-0 m-4 flex items-center bg-[#222C38] space-x-2">
      <div className="bg-[#AA672A] border border-white w-full h-full">
        <div className="bg-white rounded-full m-2 item-center w-6 h-6"></div>
      </div>
      <div className="flex flex-col m-x-2">
        <span className="text-white text-center text-sm font-bold">
          {username}
        </span>
        <div className="flex items-center text-xs text-white">
          <span>LVL</span>
          <div className="mx-2 w-16 h-1 bg-gray-600 rounded-full">
            <div className="h-full w-full bg-white "></div>
          </div>
          <span>0XP</span>
        </div>
      </div>
      <div className="bg-[#817A20] border border-white w-full h-full">
        <div className="bg-white rounded-full m-2 item-center w-6 h-6"></div>
      </div>
    </div>
  );
};

export default UsernameHolder;
