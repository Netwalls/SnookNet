import { Bowlby_One_SC } from 'next/font/google';

const bowlby = Bowlby_One_SC({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bowlby-one-sc',
  });

export default function Profile() {
    return (
      <div className={`flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-[url('/background.svg')] bg-no-repeat bg-cover ${bowlby.variable}`}>
  
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex items-center gap-4">
          <button className="relative bg-[#222C38] transform -skew-x-12 px-4 sm:px-8 h-[40px] sm:h-[62px]">
            <span className="text-[#F3F5FF] text-sm sm:text-base font-bold transform skew-x-12">
              CONNECT WALLET
            </span>
          </button>
        </div>
  
        <main className="w-[70%] flex flex-col mx-auto">

          <h1 className="text-[32px] font-bold self-start ml-6">PROFILE</h1>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[93px] mt-8">
            <div className="bg-gradient-to-b from-[rgba(34,44,56,0.7)] to-[rgba(0,0,0,0.7)] border-2 border-[#4B4B4B] w-[292px] h-[292px] flex flex-col justify-end items-center transform -skew-x-6">
              <div className="text-[#F3F5FF] text-18px font-bold tracking-wide transform skew-x-6">
                LEVELS
              </div>
            </div>
  
            <div className="bg-gradient-to-b from-[rgba(34,44,56,0.7)] to-[rgba(0,0,0,0.7)] border-2 border-[#4B4B4B] w-[292px] h-[292px] flex flex-col justify-end items-center transform -skew-x-6">
              <div className="text-[#F3F5FF] text-[18px] font-bold tracking-wide transform skew-x-6">
                NFTS
              </div>
            </div>
  
            <div className="bg-gradient-to-b from-[rgba(34,44,56,0.7)] to-[rgba(0,0,0,0.7)] border-2 border-[#4B4B4B] w-[292px] h-[292px] flex flex-col justify-end items-center transform -skew-x-6">
              <div className="text-[#F3F5FF] text-[18px] font-bold tracking-wide transform skew-x-6">
                STATS
              </div>
            </div>
          </div>
        </main>
        
      </div>
    );
  }
  