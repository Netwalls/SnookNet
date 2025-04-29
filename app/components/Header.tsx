"use client";
import { useAudioCustom } from "./AudioProvider";
import UNMUTE from "./assets/images/unmute.png";
import MUTED from "./assets/images/muted.png";
import Image from "next/image";

export default function Header() {
  const { playBackgroundAudio, pauseBackgroundAudio, playingBackgroundAudio } =
    useAudioCustom();
  return (
    <>
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex items-center gap-4">
        <div className="h-[40px] sm:h-[62px] w-[50px] sm:w-[72px] bg-[#222C38] transform -skew-x-12 flex justify-center items-center">
          {!playingBackgroundAudio && (
            <button
              type="button"
              onClick={() => {
                playBackgroundAudio();
              }}
              className="cursor-pointer"
            >
              <Image src={MUTED} alt="paused" width={48} height={48} />
            </button>
          )}
          {playingBackgroundAudio && (
            <button
              type="button"
              onClick={() => {
                pauseBackgroundAudio();
              }}
              className="cursor-pointer"
            >
              <Image src={UNMUTE} alt="playing" width={48} height={48} />
            </button>
          )}
        </div>
        <button
          type="button"
          className="relative bg-white transform -skew-x-12 px-4 sm:px-8 h-[40px] sm:h-[62px]"
        >
          <span className="text-[#222C38] text-sm sm:text-base font-bold transform skew-x-12">
            CONNECT WALET
          </span>
        </button>
      </div>
    </>
  );
}
