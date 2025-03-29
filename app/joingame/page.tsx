import Image from "next/image";
import React from "react";

const JoinGame = () => {
	return (
		<section className="flex justify-items-center relative min-h-screen pb-20 gap-16 p-2 font-[family-name:var(--font-geist-sans)] bg-[url('/background.svg')] bg-no-repeat bg-cover">
			<button className=" bg-[#222C38] absolute right-10  transform -skew-x-12 cursor-pointer px-4 sm:px-8 h-[40px] sm:h-[62px]">
				<span className=" text-sm text-white sm:text-base font-bold transform skew-x-12">
					CONNECT WALLET
				</span>
			</button>
			<div className="flex items-center gap-x-12 max-w-3/4 mx-auto mt-30">
				<div className="flex flex-col gap-y-16">
					<h1 className="font-[family-name:var(--font-geist-sans)] font-extrabold text-3xl">
						ENTER GAME CODE
					</h1>
					<div className="flex gap-x-2  ">
						<input
							type="text"
							className="bg-[#222C38] border-[#696969] border-2 h-[4rem] w-[4rem] p-2  transform -skew-x-8"
						/>
						<input
							type="text"
							className="bg-[#222C38] border-[#696969] border-2 h-[4rem] w-[4rem] p-2  transform -skew-x-8"
						/>
						<input
							type="text"
							className="bg-[#222C38] border-[#696969] border-2 h-[4rem] w-[4rem] p-2  transform -skew-x-8"
						/>
						<input
							type="text"
							className="bg-[#222C38] border-[#696969] border-2 h-[4rem] w-[4rem] p-2  transform -skew-x-8"
						/>
					</div>
					<div>
						<button className="relative   bg-[#222C38] transform -skew-x-12 cursor-pointer px-4 sm:px-8 h-[40px] sm:h-[62px]">
							<span className=" text-sm text-white sm:text-base font-bold transform skew-x-12">
								JOIN GAME
							</span>
						</button>
					</div>
				</div>
				<div>
					<Image src="/card.svg" alt="join card" width={300} height={500} />
				</div>
			</div>
		</section>
	);
};

export default JoinGame;
