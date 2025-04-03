import React from "react";
import Image from "next/image";
import createGame from "@/public/creategame.png"
import qrcode from "@/public/QR.png"
import profilebar from "@/public/profilebar.png"

const OpponentJoined = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
     style={{ backgroundImage: "url('/Background.png')" }}>
      <div className="absolute top-4 right-4 flex items-center space-x-4 p-2  rounded-lg px-4">
        <Image src={profilebar} alt="" />
      </div>

      
        <div className="relative flex items-center justify-center gap-10">
             <div><Image src={createGame} alt="" /></div>
        <div><Image src={qrcode} alt="" /></div>
     </div>
        <div className="absolute bg-gradient-to-r from-[#3b636c33] via-[#3d2138b3] to-[#3b636c33] p-8 rounded-lg w-full flex flex-col items-center">
      
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">OPPONENT JOINED!</h1>
      </div>
      
    </div>
  );
};

export default OpponentJoined;
