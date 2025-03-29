import React from "react";

const GameIsStartingModal = ({ isOpen }: { isOpen: boolean }) => {
	if (!isOpen) return null;

	const borderStyle = {
		borderWidth: "2px 0px 2px 0px",
		borderStyle: "solid",
		borderImage:
			"linear-gradient(90deg, rgba(169, 169, 169, 0) 14.47%, #488B92 50.31%, rgba(169, 169, 169, 0) 86.21%) 1",
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 backdrop-blur-[1px]">
			<div
				className="relative w-full px-8 py-[38px] text-white bg-opacity-70  border-y border-gray-600"
				style={{
					...borderStyle,
					background:
						"linear-gradient(90deg, rgba(59, 99, 108, 0) 1.5%, #3d2138ab 60.42%, rgba(59, 99, 108, 0) 86.39%)",
				}}
			>
				<h1 className="text-[32px] text-[#F3F5FF] font-black text-center">
					GAME IS STARTING...
				</h1>
			</div>
		</div>
	);
};

export default GameIsStartingModal;
