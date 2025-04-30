import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

// import WalletConnectButton from './components/WalletConnectButton';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/background.svg')] bg-no-repeat bg-cover">
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center w-full mt-12 sm:mt-20">
        <div className="flex flex-col gap-4 w-full items-center sm:items-start sm:ml-8">
          <Image
            src="/snooknet.svg"
            alt="Snooknet logo"
            width={518}
            height={113}
            className="max-w-full w-[300px] sm:w-auto -mt-20 sm:-mt-40"
            priority
          />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-2 w-full">
            <div className="flex flex-col gap-1">
              <Link
                href="/profile"
                className="self-center sm:self-start sm:ml-2"
              >
                <div className="bg-[#222C38] w-[149.5px] h-[107px] flex flex-col justify-end items-center pb-3 transform -skew-x-6">
                  <div className="text-[#F3F5FF] font-bold tracking-wide uppercase transform skew-x-6">
                    Profile
                  </div>
                </div>
              </Link>

              <Link
                href="/wallet"
                className="self-center sm:self-start sm:-ml-2"
              >
                <div className="bg-[#222C38] w-[149.5px] h-[107px] flex flex-col justify-end items-center pb-3 transform -skew-x-6">
                  <div className="text-[#F3F5FF] font-bold tracking-wide uppercase transform skew-x-6">
                    Wallet
                  </div>
                </div>
              </Link>

              <Link
                href="/settings"
                className="self-center sm:self-start sm:-ml-6"
              >
                <div className="bg-[#222C38] w-[149.5px] h-[107px] flex flex-col justify-end items-center pb-3 transform -skew-x-6">
                  <div className="text-[#F3F5FF] font-bold tracking-wide uppercase transform skew-x-6">
                    Settings
                  </div>
                </div>
              </Link>

              <Link
                href="/socials"
                className="self-center sm:self-start sm:-ml-8"
              >
                <div className="bg-[#222C38] w-[149.5px] h-[107px] flex flex-col justify-end items-center pb-3 transform -skew-x-6">
                  <div className="text-[#F3F5FF] font-bold tracking-wide uppercase transform skew-x-6">
                    Socials
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-2 items-center sm:items-start -ml-4 sm:-ml-4">
              <div
                className="flex flex-col sm:flex-row gap-2 sm:gap-0"
                style={{ gap: "2px" }}
              >
                <div className="relative">
                  <Image
                    src="/pool table purple.svg"
                    alt="Pool Table Purple"
                    width={509.5}
                    height={217}
                    className="max-w-full w-[300px] sm:w-auto"
                    priority
                  />
                  <Link href="/gameMode" 
                  className="absolute bottom-4 left-8 text-white">
                    <h3 className="font-bold text-lg sm:text-xl mb-1">
                      PLAY GAMES
                    </h3>
                    <p className="text-xs sm:text-sm max-w-[250px]">
                      Choose variety of ways SnookNet
                    </p>
                  </Link>
                </div>

                <div className="relative -ml-6 sm:-ml-6">
                  <Image
                    src="/pool table orange.svg"
                    alt="Pool Table Orange"
                    width={509.5}
                    height={217}
                    className="max-w-full w-[300px] sm:w-auto"
                    priority
                  />
                  <div className="absolute bottom-4 left-8 text-white">
                    <h3 className="font-bold text-lg sm:text-xl mb-1">
                      TOURNAMENTS
                    </h3>
                    <p className="text-xs sm:text-sm max-w-[250px]">
                      Reach the top
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:-ml-6"
                style={{ gap: "2px" }}
              >
                <div className="relative">
                  <Image
                    src="/pool table light green.svg"
                    alt="Pool Table Light Green"
                    width={509.5}
                    height={217}
                    className="max-w-full w-[300px] sm:w-auto"
                    priority
                  />
                  <div className="absolute bottom-4 left-8 text-white">
                    <h3 className="font-bold text-lg sm:text-xl mb-1">
                      AI OPPONENT
                    </h3>
                    <p className="text-xs sm:text-sm max-w-[250px]">
                      Battle with Ai
                    </p>
                  </div>
                </div>

                <div className="relative -ml-6 sm:-ml-6">
                  <Image
                    src="/pool table green.svg"
                    alt="Pool Table Green"
                    width={509.5}
                    height={217}
                    className="max-w-full w-[300px] sm:w-auto"
                    priority
                  />
                  <div className="absolute bottom-4 left-8 text-white">
                    <h3 className="font-bold text-lg sm:text-xl mb-1">
                      MARKET PLACE
                    </h3>
                    <p className="text-xs sm:text-sm max-w-[250px]">
                      Show case your achievements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
