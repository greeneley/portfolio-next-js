"use client";
import React, { useState, useCallback } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { useIsMobile } from "@/hook/useIsMobile";

export const Header = ({ leftNav }: { leftNav: React.ReactNode }) => {
	const isMobile = useIsMobile();
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const closeNav = useCallback(() => {
		setIsOpen(false);
	}, []);

	return (
		<header className="mt-5">
			{isMobile && (
				<div className="flex justify-end mr-10 mb-5">
					<LuAlignJustify onClick={toggleNav} className="cursor-pointer" />
				</div>
			)}
			{(!isMobile || isOpen) && (
				<nav className={isMobile ? "transition-all duration-300" : ""}>
					<ul
						className={`flex ${isMobile ? "flex-col" : "flex-row gap-8"} flex-wrap text-xl justify-center items-center`}
						onClick={toggleNav}>
						{leftNav}
					</ul>
				</nav>
			)}
		</header>
	);
};
