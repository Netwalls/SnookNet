"use client"

import React from 'react';
import Image from 'next/image';
import GamePlayer1 from '@/public/GamePlayer1.png';
import GamePlayer2 from '@/public/GamePayer2.png';
import Cue from '@/public/cue.png'



const GameUI = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/wood-bg.jpg')] bg-cover bg-center flex flex-col items-center p-4">
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2 bg-[#1f2a38] text-white px-2 py-1 rounded-md">
          <Image src={GamePlayer1} alt='' className='w-[363px] h-[93px] ' />
        </div>

        <button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold px-6 py-2 rounded">PAUSE GAME</button>

        <div className="flex items-center space-x-2 bg-[#1f2a38] text-white px-2 py-1 rounded-md">
          <Image src={GamePlayer2} alt='' className='w-[363px] h-[93px]'/>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-6xl flex-1 flex justify-center items-center">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
          <button className="bg-[#1f2a38] p-2 rounded shadow text-white">💬</button>
          <button className="bg-[#1f2a38] p-2 rounded shadow text-white">⚙️</button>
        </div>

        <div className="bg-[#388163] rounded-2xl border-[12px] border-[#402603] p-2 w-[70%] h-[60vh]" />

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-1 justify-between ">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded ${i > 7 ? 'bg-red-500' : i > 5 ? 'bg-yellow-500' : 'bg-green-500'}`} />
          ))}
          <Image src={Cue} alt=''/>
        </div>
      </div>

      <div className="w-full max-w-4xl flex justify-center mt-4 space-x-2">
        {Array(18).fill(0).map((_, i) => (
          <div key={i} className="w-8 h-8 bg-gray-300 rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default GameUI;
