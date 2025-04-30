"use client";

import { Lock } from "lucide-react";

interface BallGridProps {
  theme: "purple" | "green" | "gold";
  selectedBall: number;
  onSelectBall: (index: number) => void;
}

export default function BallGrid({
  theme,
  selectedBall,
  onSelectBall,
}: BallGridProps) {
  // Define theme colors
  const themeColors = {
    purple: "bg-gradient-to-tr from-[#8654A5]/85 to-[#000000]",
    green: "bg-gradient-to-tr from-[#3CE701]/85 to-[#000000]",
    gold: "bg-gradient-to-tr from-[#817A20]/85 to-[#000000]",
  };


  // For the gold theme, we'll show some locked balls
  const isGoldTheme = theme === "gold";

  // Create an array of 8 balls (or more if needed)
  const balls = Array.from({ length: isGoldTheme ? 8 : 4 }, (_, i) => ({
    id: i,
    locked: isGoldTheme && i > 3,
  }));

  return (
    <div className="grid grid-cols-4 gap-2 w-1/2">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className={`relative aspect-squar border-2 h-[148px] w-[148px] ${
            selectedBall === ball.id ? "border-white" : "border-gray-500"
          } ${themeColors[theme]} cursor-pointer`}
          onClick={() => !ball.locked && onSelectBall(ball.id)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 relative h-3/4 bg-black rounded-full flex items-center justify-center ">
              <div
                className={`${
                  theme === "purple"
                    ? "bg-gradient-to-tr from-[#8654A5]/85"
                      : theme === "green"
                      ? "bg-gradient-to-tr from-[#3CE701]/85 to-[#000000]"
                    : "bg-gradient-to-tr from-[#817A20]/85 to-[#000000]"
                } absolute top-5 right-6 text-3xl -rotate-[60deg] bg-white w-1/3 h-1/3 bg- rounded-full flex items-center justify-center text-[#000000] font-bold`}
              >
                8
              </div>
            </div>
          </div>

          {ball.locked && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Lock className="w-6 h-6 text-yellow-500" />
                <span className="text-xs font-bold text-white">LOCKED</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
