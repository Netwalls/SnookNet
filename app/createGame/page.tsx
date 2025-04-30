"use client";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const GameCreationPage = () => {
  const [gameCode, setGameCode] = useState<string>("014454");
  const [qrValue, setQrValue] = useState<string>("");

  useEffect(() => {
    const baseUrl = "https://yourgame.com/join";
    setQrValue(`${baseUrl}?code=${gameCode}`);
  }, [gameCode]);

  const handleCreateGame = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000)
      .toString()
      .substring(0, 6);
    setGameCode(newCode);
    console.log("Creating new game with code:", newCode);
  };

  const containerClasses =
    "w-full sm:w-[250px] md:w-[292px] h-[180px] sm:h-[220px] md:h-[260px] mx-auto";

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[url('/Background.png')] bg-cover bg-center">
      <div className="absolute top-0 right-0 m-4 flex items-center bg-[#222C38] space-x-2">
        <div className='bg-[#AA672A] border border-white w-full h-full'>
          <div className="bg-white rounded-full m-2 item-center w-6 h-6"></div>
        </div>
        <div className="flex flex-col m-x-2">
          <span className="text-white text-center text-sm font-bold">USERNAME</span>
          <div className="flex items-center text-xs text-white">
            <span>LVL</span>
            <div className="mx-2 w-16 h-1 bg-gray-600 rounded-full">
              <div className="h-full w-full bg-white "></div>
            </div>
            <span>0XP</span>
          </div>
        </div>
        <div className='bg-[#817A20] border border-white w-full h-full'>
          <div className="bg-white rounded-full m-2 item-center w-6 h-6"></div>
        </div>
      </div>

      <div className="relative flex items-center justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-2xl w-full px-4 sm:px-6 lg:px-8">
          <div
            className={`${containerClasses} bg-gradient-to-r from-[#EB655F] to-[#000000] flex items-end justify-center relative`}
            style={{
              // transform: "perspective(500px) rotateY(5deg)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            <button
              onClick={handleCreateGame}
              className="text-white font-bold py-3 sm:py-4 mr-0 sm:mr-6 md:mr-10 transform transition-transform duration-300 hover:scale-105 relative z-10"
            >
              <span
                className="text-lg sm:text-xl md:text-2xl tracking-widest uppercase font-sans"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
              >
                CREATE GAME
              </span>
            </button>
          </div>


          <div className={`${containerClasses} relative flex flex-col items-center justify-center`}>
            <div className="p-2 bg-white rounded-md">
              <QRCode
                value={qrValue}
                size={100}
                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]"
              />
            </div>
            <div className="mt-4 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-center">
              {gameCode}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCreationPage;