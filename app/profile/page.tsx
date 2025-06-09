"use client";

import { Bowlby_One_SC } from "next/font/google";

import Image from "next/image";
import ProfileNav from "../components/ProfileNav";
import ProgressChart from "../components/ProgressChart";
import MasteryChart from "../components/MasteryChart";
const bowlby = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bowlby-one-sc"
});

export default function Profile() {
  return (
    <main
      className={`${bowlby.variable} flex flex-col items-start justify-start min-h-screen w-screen px-8 pt-16  bg-[url('/assets/brawlout-bg.jpg')] bg-no-repeat bg-cover`}
    >
      <div className="min-w-[55%] grid ">
        <h1 className="text-6xl font-bold pb-4 pl-20 place-self-start  text-yellow-300">
          PACO
        </h1>
        <div className="w-10/12 grid place-items-center">
          <ProfileNav />
          <div className="w-9/12 bg-[#ffffff1f] p-6 grid gap-6">
            <div className="flex gap-8 justify-between">
              <div className="grid gap-4 w-full font-semibold text-xl text-white">
                <div className="flex gap-1 w-full  -skew-x-12">
                  <span className="w-full pl-3 py-2 bg-gray-700 ">Matches</span>
                  <span className="bg-gray-700 pr-3 py-2 w-1/3 text-right ">
                    0
                  </span>
                </div>
                <div className="flex gap-1 w-full -skew-x-12">
                  <span className="w-full pl-3 py-2 bg-gray-700">Usage</span>
                  <span className="bg-gray-700 pr-3 py-2 w-1/3 text-right">
                    0%
                  </span>
                </div>
                <div className="flex gap-1 w-full -skew-x-12">
                  <span className="w-full pl-3 py-2 bg-gray-700">Wins</span>
                  <span className="bg-gray-700 pr-3 py-2 w-1/3 text-right">
                    0
                  </span>
                </div>
                <div className="flex gap-1 w-full -skew-x-12">
                  <span className="w-full pl-3 py-2 bg-gray-700">
                    Win Ratio
                  </span>
                  <span className="bg-gray-700 pr-3 py-2 w-1/3 text-right">
                    0%
                  </span>
                </div>
              </div>
              <Image
                src="/assets/brawlout-profile-img.jpg"
                alt="brawl"
                width={200}
                height={500}
                className="border-3 border-white rounded-md -skew-x-8"
              />
            </div>

            <div className="flex justify-between text-2xl bg-white pl-4 p-1 text-gray-700 font-semibold -skew-x-12">
              <h4>GAME MODE</h4>
              <div className="flex gap-8">
                <button className="font-extrabold cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  {"<"}
                </button>{" "}
                <p>RANKED</p>
                <button className="font-extrabold cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  {">"}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6 pt-5">
            <ProgressChart
              title="ITEM UNLOCKS"
              variant={{ start: 4, end: 32, color: "white" }}
            />

            <MasteryChart
              title="MASTERY"
              variant={{ start: 3, end: 100, color: "yellow" }}
            />
          </div>

          <div className="w-9/12 bg-[#ffffff1f] p-6 grid gap-6">
            <div className="grid gap-4 w-full font-semibold text-xl text-white">
              <div className="flex gap-1 w-full -skew-x-12">
                <span className="w-full pl-3 py-2 bg-gray-700 ">Total XP</span>
                <span className="bg-gray-700 pr-3 py-2 w-6/12 text-right ">
                  1,505
                </span>
              </div>
              <div className="flex gap-1 w-full -skew-x-12">
                <span className="w-full pl-3 py-2 bg-gray-700">Next Level</span>
                <span className="bg-gray-700 pr-3 py-2 w-7/12 text-right">
                  3,815
                </span>
              </div>
              <div className="flex gap-1 w-full -skew-x-12">
                <span className="w-full pl-3 py-2 bg-gray-700">
                  Next Reward
                </span>
                <span className="bg-gray-700 pr-3 py-2 w-8/12 text-right">
                  Gancho Reward
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end w-full">
        <div className="flex gap-4">
          <button className="cursor-pointer">
            <span className="bg-gradient-to-b  from-gray-600 to-black rounded-full w-3 aspect-square p-2 px-3 text-red-500 font-semibold mr-1">
              A
            </span>
            <span>Select</span>
          </button>
          <button className="cursor-pointer">
            <span className="bg-gradient-to-b  from-gray-600 to-black rounded-full w-3 aspect-square p-2 px-3 text-green-600 font-semibold mr-1">
              B
            </span>
            <span>Back</span>
          </button>
        </div>
      </div>

      <div className="mx-auto bg-gray-700 px-16 w-2/3 text-center py-2 text-[14px] -skew-x-8">
        Chat on our Discord channel to find worthy opponents!
      </div>
    </main>
  );
}
