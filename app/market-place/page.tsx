"use client"

import { useState } from "react";
import BallGrid from "./component/ball-grid";
import BallPreview from "./component/ball-preview";

export default function MarketPlace() {
      const [activeTab, setActiveTab] = useState("BALLS");
      const [selectedTheme, setSelectedTheme] = useState<
        "purple" | "green" | "gold"
      >("purple");
      const [selectedBall, setSelectedBall] = useState(0);

      const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab =="BALLS"){
            setSelectedTheme("purple");
        }
         if (tab == "CUES") {
           setSelectedTheme("green");
         }
          if (tab == "SKIN") {
            setSelectedTheme("gold");
          }
      };
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[url('/gamemode-bg.jpg')] bg-no-repeat bg-cover">
      <div className="absolute top-0 right-0 m-4 flex items-center bg-[#222C38] space-x-2">
        <div className="bg-[#AA672A] border border-white w-full h-full">
          <div className="bg-white rounded-full m-2 item-center w-6 h-6"></div>
        </div>
        <div className="flex flex-col m-x-2">
          <span className="text-white text-center text-sm font-bold">
            USERNAME
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

      <div className="relative w-full max-w-6xl overflow-hidden mt-10">
        <div className="relative z-10 w-full h-full flex flex-col p-4">
          {/* Navigation tabs */}
          <div className="flex justify-between mt-4 mb-6 space-x-2">
            <div className="flex flex-1 gap-2">
              {["BALLS", "CUES", "SKIN"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-8 py-2 font-bold text-sm ${
                    activeTab === tab
                      ? "bg-white text-black"
                      : "bg-[#222c38] text-white"
                  } border border-white`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="max-w-[250px]">
              <button className="w-full px-8 py-2 font-bold text-sm bg-white text-black border border-white h-14">
                TITLE OF SELECTION
              </button>
            </div>
          </div>

          <div className="flex justify-baseline gap-28">
            {/* Ball selection grid */}
            <BallGrid
              theme={selectedTheme}
              selectedBall={selectedBall}
              onSelectBall={setSelectedBall}
            />

            {/* Ball preview */}
            <BallPreview theme={selectedTheme} ballIndex={selectedBall} />
          </div>
        </div>
      </div>
    </div>
  );
}
