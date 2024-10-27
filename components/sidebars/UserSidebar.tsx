import {
	Command,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandGroup,
} from "@/components/ui/command";
import { LayoutDashboard, DatabaseZap, ChartArea, LogOut } from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
	return (
		<Command className="bg-secondary rounded-none">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandGroup className="m-0 p-0">
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<LayoutDashboard className="mr-2 h-4 w-4 " />
						<Link href="/user"> Dashboard</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<DatabaseZap className="mr-2 h-4 w-4" />
						<Link href="/user/datasets">Datasets</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<ChartArea className="mr-2 h-4 w-4" />
						<Link href="/user/charts">Charts</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3 cursor-pointer">
						<LogOut className="mr-2 h-4 w-4" />
						Logout
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
			</CommandList>
		</Command>
	);
};
