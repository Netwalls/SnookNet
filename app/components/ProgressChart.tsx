import React from "react";

type ProgressChartProps = {
  start: number;
  end: number;
  color: string;
};

const ProgressChart = ({
  title,
  variant
}: {
  title: string;
  variant: ProgressChartProps;
}) => {
  const chartPercentage = (variant.start / variant.end) * 100;

  return (
    <div className="grid place-items-center min-h-[200px] ">
      <h5 className="text-3xl text-center font-semibold">{title}</h5>
      <div
        className="w-[120px] aspect-square rounded-full relative flex justify-center items-center text-base font-bold color-[#333333]  m-5"
        style={{
          background: `conic-gradient(${variant.color} 0% ${chartPercentage}%, #0000008a ${chartPercentage}% 100%`
        }}
      >
        <div
          className="absolute z-10 bg-[#194873] rounded-full flex justify-center items-center "
          style={{
            width: "calc(120px - (7px * 2))",
            height: "calc(120px - (7px * 2))"
          }}
        >
          <p className="text-4xl pr-0.5"> {variant.start}</p>
          <span className="text-lg">/{variant.end}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
