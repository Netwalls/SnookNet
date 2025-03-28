"use client";

import React, { useState } from "react";
import { connect, disconnect } from "get-starknet";
import { encode } from "starknet";

function WalletConnectButton() {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletName, setWalletName] = useState("");
  const [wallet, setWallet] = useState<any>("");

  const handleDisconnect = async () => {
    await disconnect({ clearLastWallet: true });
    setWallet("");
    setWalletAddress("");
    setWalletName("");
  };

  const truncatedAddress =
    walletAddress.length > 25
      ? walletAddress.slice(0, 5) +
        "..." +
        walletAddress.slice(10, 15) +
        walletAddress.slice(20, 25)
      : walletAddress;

  const handleConnect = async () => {
    try {
      const getWallet = await connect({
        modalMode: "alwaysAsk",
        modalTheme: "light",
      });
      await getWallet?.enable({ starknetVersion: "v5" });
      setWallet(getWallet);
      const addr = encode.addHexPrefix(
        encode
          .removeHexPrefix(getWallet?.selectedAddress ?? "0x")
          .padStart(64, "0")
      );
      setWalletAddress(addr);
      setWalletName(getWallet?.name || "");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!walletAddress && (
        <button
          onClick={handleConnect}
          className="relative bg-white transform -skew-x-12 cursor-pointer px-4 sm:px-8 h-[40px] sm:h-[62px]"
        >
          <span className="text-[#222C38] text-sm sm:text-base font-bold transform skew-x-12">
            CONNECT WALLET
          </span>
        </button>
      )}
      {walletAddress && (
        <div>
          <button
            className="cursor-pointer flex flex-col items-center justify-center"
            onClick={handleDisconnect}
          >
            <span>Disconnect Wallet</span>
            <p>{truncatedAddress}</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default WalletConnectButton;
