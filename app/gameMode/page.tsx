"use client";

import { useState } from "react";
import Link from "next/link";
import UsernameHolder from "../components/UsernameHolder";

export default function GameSelectionScreen() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (cardType: string) => {
    setSelectedCard(cardType);
    console.log(`Selected card: ${cardType}`);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[url('/gamemode-bg.jpg')] bg-no-repeat bg-cover">
      <UsernameHolder username="USERNAME" />

      <div className="flex justify-center items-center space-x-4">
        <Link
          href="/createGame"
          className={`w-64 h-64 bg-gradient-to-r from-[#EB655F] to-[#000000] p-6 flex flex-col justify-end cursor-pointer transition-transform transform hover:scale-105 shadow-xl ${
            selectedCard === "create" ? "ring-2 ring-white" : ""
          }`}
          onClick={() => handleCardClick("create")}
        >
          <h2 className="text-white text-xl font-bold mb-2">CREATE GAME</h2>
          <p className="text-white text-sm opacity-80">
            Choose from a variety of game rooms to host yourself
          </p>
        </Link>

        <Link
          href="/joingame"
          className={`w-64 h-64 bg-gradient-to-r from-[#549FA5] to-[#000000]  p-6 flex flex-col justify-end cursor-pointer transition-transform transform hover:scale-105 shadow-xl ${
            selectedCard === "join" ? "ring-2 ring-white" : ""
          }`}
          onClick={() => handleCardClick("join")}
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
