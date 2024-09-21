import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ThemeToggler } from "./ThemeToggler";

export const Navbar = () => {
	return (
		<div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
			<Link href="/">
				<Image alt="logos" src={logo} width={40} />
				{/* <Avatar>
					<AvatarFallback className="text-black">Logo</AvatarFallback>
				</Avatar> */}
			</Link>

			<div className="flex items-center">
				<ThemeToggler />
				<DropdownMenu>
					<DropdownMenuTrigger className="focus:outline-none">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback className="text-black">BT</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link href="/profile">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/logout">Logout</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};
