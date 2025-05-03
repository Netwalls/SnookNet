interface BallPreviewProps {
  theme: "purple" | "green" | "gold";
  ballIndex: number;
}

export default function BallPreview({ theme}: BallPreviewProps) {
  // Define theme colors
  const themeColors = {
    purple: "bg-gradient-to-tr from-[#8654A5]/75 to-[#000000]",
    green: "bg-gradient-to-tr from-[#3CE701]/75 to-[#000000]",
    gold: "bg-gradient-to-tr from-[#817A20]/75 to-[#000000]",
  };

  return (
    <div className="flex flex-col w-1/2 max-w-[309px] h-[342px] gap-2">
      <div
        className={`flex-1 ${themeColors[theme]} border-2 border-white flex items-center justify-center`}
      >
        <div className="w-[177px] h-[177px] bg-black rounded-full flex items-center justify-center relative">
          <div
            className={`${
              theme === "purple"
                ? "bg-gradient-to-tr from-[#8654A5]/85"
                : theme === "green"
                ? "bg-gradient-to-tr from-[#3CE701]/85 to-[#000000]"
                : "bg-gradient-to-tr from-[#817A20]/85 to-[#000000]"
            } absolute top-5 right-6  text-6xl -rotate-[50deg] w-1/3 h-1/3 bg-white rounded-full flex items-center justify-center text-black font-bold`}
          >
            8
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-l from-[#FF7C00] to-[#FEDB31] text-white py-2 font-bold">
        SELECT
      </button>
    </div>
  );
}
