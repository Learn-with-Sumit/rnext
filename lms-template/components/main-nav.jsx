"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { MobileNav } from "@/components/mobile-nav";
import lwsLogo from "@/assets/lws_logo.svg";
import Image from "next/image";
import { X } from "lucide-react";
import { Command } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export function MainNav({ items, children }) {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<>
			<div className="flex gap-6 lg:gap-10">
				<Link href="/">
					<Image className="max-w-[100px]" src={lwsLogo} alt="Logo" />
				</Link>
				{items?.length ? (
					<nav className="hidden gap-6 lg:flex">
						{items?.map((item, index) => (
							<Link
								key={index}
								href={item.disabled ? "#" : item.href}
								className={cn(
									"flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
								)}>
								{item.title}
							</Link>
						))}
					</nav>
				) : null}

				{showMobileMenu && items && (
					<MobileNav items={items}>{children}</MobileNav>
				)}
			</div>
			<nav className="flex items-center gap-3">
				<div className="items-center gap-3 hidden lg:flex">
					<Link
						href="/login"
						className={cn(buttonVariants({ size: "sm" }), "px-4")}>
						Login
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm">
								Register
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-56 mt-4">
							<DropdownMenuItem className="cursor-pointer">
								<Link href="">Student</Link>
							</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer">
								<Link href="">Instructor</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="cursor-pointer">
							<Avatar>
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-56 mt-4">
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="account">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="account/enrolled-courses">My Courses</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="">Testimonials & Certificates</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="">Logout</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<button
					className="flex items-center space-x-2 lg:hidden"
					onClick={() => setShowMobileMenu(!showMobileMenu)}>
					{showMobileMenu ? <X /> : <Menu />}
				</button>
			</nav>
		</>
	);
}
