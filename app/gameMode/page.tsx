'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function GameSelectionScreen() {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const handleCardClick = (cardType: string) => {
        setSelectedCard(cardType);
        console.log(`Selected card: ${cardType}`);
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-[url('/gamemode-bg.jpg')] bg-no-repeat bg-cover">

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

            <div className="flex justify-center items-center space-x-4">
                <Link href="/createGame"
                    className={`w-64 h-64 bg-gradient-to-r from-[#EB655F] to-[#000000] p-6 flex flex-col justify-end cursor-pointer transition-transform transform hover:scale-105 shadow-xl ${selectedCard === 'create' ? 'ring-2 ring-white' : ''}`}
                    onClick={() => handleCardClick('create')}
                >
                    <h2 className="text-white text-xl font-bold mb-2">CREATE GAME</h2>
                    <p className="text-white text-sm opacity-80">
                        Choose from a variety of game rooms to host yourself
                    </p>
                </Link>

                <Link href="/joingame"
                    className={`w-64 h-64 bg-gradient-to-r from-[#549FA5] to-[#000000]  p-6 flex flex-col justify-end cursor-pointer transition-transform transform hover:scale-105 shadow-xl ${selectedCard === 'join' ? 'ring-2 ring-white' : ''}`}
                    onClick={() => handleCardClick('join')}
                >
                    <h2 className="text-white text-xl font-bold mb-2">JOIN GAME</h2>
                    <p className="text-white text-sm opacity-80">
                        Find an active variety of rooms to enjoy together
                    </p>
                </Link>
            </div>
        </div>
    );
}