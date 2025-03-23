"use client"

import React, { useState } from "react";
import { connect, disconnect } from "get-starknet";
import { encode } from "starknet";
function WalletConnectButton() {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletName, setWalletName] = useState("");
  const [wallet, setWallet] = useState("");
  const handleDisconnect = async () => {
    await disconnect({ clearLastWallet: true });
    setWallet("");
    setWalletAddress("");
    setWalletName("");
  };
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
      // Handle user rejection to install MetaMask / the Starknet Snap.
      console.log(e);
    }
  };
  return (
    <div>
      {!walletAddress && (
        <button className="cursor-pointer bg-blue-600" onClick={handleConnect}>Connect Wallet</button>
      )}
      {walletAddress && (
        <div>
          <button onClick={handleDisconnect}>Disconnect Wallet</button>
          <div>
            <p>Wallet Name: {walletName}</p>
            <p>Wallet Address: {walletAddress}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default WalletConnectButton;
