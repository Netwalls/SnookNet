"use client";
import { useAudioCustom } from "./AudioProvider";
import UNMUTE from "@/public/assets/images/unmute.png";
import MUTED from "@/public/assets/images/muted.png";
import Image from "next/image";
import { WalletConnectorModal } from "./WalletConnector";

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
        <WalletConnectorModal />
      </div>
    </>
  );
}
