"use client"

import React from "react";

const JoinGame = () => {
  const [selectedCard, setSelectedCard] = React.useState<string>('');

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
  };

  return (
    <section className="flex justify-items-center relative min-h-screen pb-20 gap-16 p-2 font-[family-name:var(--font-geist-sans)] bg-[url('/joinGameBg.svg')] bg-no-repeat bg-cover">

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
      <div className="flex items-center gap-x-12 max-w-3/4 mx-auto mt-30">
        <div className="flex flex-col gap-y-16">
          <h1 className="font-[family-name:var(--font-geist-sans)] font-extrabold text-3xl">ENTER GAME CODE</h1>
          <div className="flex gap-x-2  ">
            <input type="text" className="bg-[#222C38] border-[#696969] border-2 h-[4rem] w-[4rem] p-2  transform" />
            <input type="text" className="bg-[#222C38] border-[#696969] border-2 h-[4rem] w-[4rem] p-2  transform" />
            <input type="text" className="bg-[#222C38] border-[#696969] border-2 h-[4rem] w-[4rem] p-2  transform" />
            <input type="text" className="bg-[#222C38] border-[#696969] border-2 h-[4rem] w-[4rem] p-2  transform" />
          </div>
          <div>
            <button className="relative   bg-[#222C38] transform cursor-pointer px-4 sm:px-8 h-[40px] sm:h-[62px]">
              <span className=" text-sm text-white bg-[#FFA620] border sm:text-base font-bold transform">
                JOIN GAME
              </span>
            </button>
          </div>
        </div>
        <div
          className={`w-64 h-64 bg-gradient-to-r from-[#549FA5] to-[#000000] rounded-lg p-6 flex flex-col justify-end cursor-pointer transition-transform transform hover:scale-105 shadow-xl ${selectedCard === 'join' ? 'ring-2 ring-white' : ''}`}
          onClick={() => handleCardClick('join')}
        >
          <h2 className="text-white text-xl font-bold mb-2">JOIN GAME</h2>
          <p className="text-white text-sm opacity-80">
            Choose from variety of ways to enjoy snooknet
          </p>
        </div>
      </div>
    </section>
  );
};
export default JoinGame;
