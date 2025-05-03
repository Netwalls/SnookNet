"use client";

import LockIcon from "./lock-icon";

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
    locked: isGoldTheme && i > 1,
  }));

  return (
    <div className="grid grid-cols-4 gap-2 w-2/3 mt-10">
      <>
        {balls.map((ball) => (
          <div key={ball.id} className="h-fit grid gap-1 max-w-[148px] w-full">
            <div
              className={`relative w-full border-2 h-[148px] ${
                selectedBall === ball.id ? "border-white" : "border-gray-500"
              } ${themeColors[theme]} cursor-pointer
                `}
              onClick={() => !ball.locked && onSelectBall(ball.id)}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center ${
                  ball.locked ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <div className="w-[82px] relative h-[82px] bg-black rounded-full flex items-center justify-center ">
                  <div
                    className={`${
                      theme === "purple"
                        ? "bg-gradient-to-tr from-[#8654A5]/85"
                        : theme === "green"
                        ? "bg-gradient-to-tr from-[#3CE701]/85 to-[#000000]"
                        : "bg-gradient-to-tr from-[#817A20]/85 to-[#000000]"
                    } absolute top-4 right-3 text-3xl -rotate-[50deg] bg-white w-1/3 h-1/3 bg- rounded-full flex items-center justify-center text-[#000000] font-bold`}
                  >
                    8
                  </div>
                </div>
              </div>
            </div>
            {ball.locked && (
              <button className="bg-[#222C38] border-2 py-2 border-[#696969]  w-full justify-center items-center flex gap-2">
                <span>LOCKED</span>
                <LockIcon />
              </button>
            )}
          </div>
        ))}
        {/* <button className="bg-[#222C38] w-full">LOCKED</button> */}
      </>
    </div>
  );
}
