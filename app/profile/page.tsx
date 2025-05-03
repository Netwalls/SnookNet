import { Bowlby_One_SC } from "next/font/google";
import Header from "../components/Header";
const bowlby = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bowlby-one-sc",
});

export default function Profile() {
  return (
    <div
      className={`${bowlby.variable} flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-[url('/background.svg')] bg-no-repeat bg-cover`}
    >
      <Header />
      <main className="w-full max-w-4xl flex flex-col mx-auto">
        <h1 className="text-[32px] font-bold self-start ml-6">PROFILE</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-b from-[rgba(34,44,56,0.7)] to-[rgba(0,0,0,0.7)] border-2 border-[#4B4B4B] w-full max-w-[292px] h-[292px] flex flex-col justify-end items-center transform  mx-auto">
            <div className="text-[#F3F5FF] text-[18px] font-bold tracking-wide transform">
              LEVELS
            </div>
          </div>

          <div className="bg-gradient-to-b from-[rgba(34,44,56,0.7)] to-[rgba(0,0,0,0.7)] border-2 border-[#4B4B4B] w-full max-w-[292px] h-[292px] flex flex-col justify-end items-center transform  mx-auto">
            <div className="text-[#F3F5FF] text-[18px] font-bold tracking-wide transform">
              NFTS
            </div>
          </div>

          <div className="bg-gradient-to-b from-[rgba(34,44,56,0.7)] to-[rgba(0,0,0,0.7)] border-2 border-[#4B4B4B] w-full max-w-[292px] h-[292px] flex flex-col justify-end items-center transform  mx-auto">
            <div className="text-[#F3F5FF] text-[18px] font-bold tracking-wide transform">
              STATS
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
