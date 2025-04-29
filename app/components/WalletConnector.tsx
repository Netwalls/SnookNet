"use client";

import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
} from "@starknet-react/core";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";

export function WalletConnectorModal() {
  const { disconnect } = useDisconnect();

  const { connect, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });

  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    await connect({ connector: connector as Connector });
  }

  const { address } = useAccount();

  if (!address) {
    return (
      <button
        onClick={connectWallet}
        className="relative bg-white transform -skew-x-12 cursor-pointer px-4 sm:px-8 h-[40px] sm:h-[62px]"
      >
        <span className="text-[#222C38] text-sm sm:text-base font-bold transform skew-x-12">
          CONNECT WALLET
        </span>
      </button>
    );
  }
  return (
    <div
      onClick={() => disconnect()}
      className="flex items-center gap-2 relative bg-white transform -skew-x-12 cursor-pointer px-4 sm:px-8 h-[40px] sm:h-[62px]"
    >
      <div className="text-[#222C38] text-sm sm:text-base font-bold transform skew-x-12">
        Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
      </div>
      <button className="text-[#222C38] text-sm sm:text-base font-bold transform skew-x-12">
        Disconnect
      </button>
    </div>
  );
}
