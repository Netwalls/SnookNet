import React from "react";

type ProgressChartProps = {
  start: number;
  end: number;
  color: string;
};

const MasteryChart = ({
  title,
  variant
}: {
  title: string;
  variant: ProgressChartProps;
}) => {
  const chartPercentage = (variant.start / variant.end) * 90;

  console.log({ chartPercentage });
  return (
    <div className="grid place-items-center ">
      <h5 className={`text-3xl text-center text-yellow-300 font-semibold `}>
        {title}
      </h5>
      <div
        className="w-[105px] rotate-200 aspect-square rounded-full relative flex justify-center items-center text-base font-bold color-[#333333] m-5"
        style={{
          background: `conic-gradient(  ${variant.color} 0% ${chartPercentage}%, #0000008a ${chartPercentage}% 90% , #194873 90% 100%`
        }}
      >
        <div
          className="absolute rotate-161 z-10 text-yellow-300 bg-[#194873] rounded-full flex flex-col justify-center items-center "
          style={{
            width: "calc(105px - (10px * 2))",
            height: "calc(105px - (10px * 2))"
          }}
        >
          <p className="text-2xl pr-0.5"> LVL</p>
          <p className=" text-3xl">{variant.start}</p>
        </div>
      </div>
    </div>
  );
};

export default MasteryChart;
