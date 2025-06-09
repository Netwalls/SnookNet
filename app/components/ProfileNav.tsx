import React from "react";
import { useState } from "react";

const ProfileNav = () => {
  const [active, setActive] = useState("OVERVIEW");
  return (
    <div className="flex items-center mb-4 gap-4">
      <div
        className="bg-gradient-to-b  from-gray-600 rounded-md to-black justify-self-end py-2 px-5 shadow-md font-semibold"
        style={{
          clipPath:
            "polygon(40% 0%, 100% 0%, 100% 80%, 100% 100%, 0% 100%, 0% 40%)"
        }}
      >
        LB
      </div>
      <div className="flex gap-2 ">
        {["OVERVIEW", "REWARDS", "SKILLS", "LORE"].map((item, index) => (
          <button
            key={index}
            className={`cursor-pointer pb-1 px-2 text-gray-700  text-2xl font-semibold border-b-3 border-gray-800 transition-all duration-300 ease-in-out" ${
              active === item && "border-b-yellow-300 text-yellow-300"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className="bg-gradient-to-b from-gray-600 rounded-md to-black justify-self-end py-2 px-5 shadow-md font-semibold"
        style={{
          clipPath:
            "polygon(0% 0%, 60% 0%, 100% 40%, 100% 100%, 0% 100%, 0% 10%)"
        }}
      >
        RB
      </div>
    </div>
  );
};

export default ProfileNav;
