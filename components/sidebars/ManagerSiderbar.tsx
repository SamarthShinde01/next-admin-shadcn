import {
	Command,
	CommandEmpty,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandGroup,
} from "@/components/ui/command";
import {
	LayoutDashboard,
	DatabaseZap,
	ChartArea,
	Users2Icon,
} from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
	return (
		<Command className="bg-secondary rounded-none">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandGroup className="m-0 p-0">
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<LayoutDashboard className="mr-2 h-4 w-4 " />
						<Link href="/manager"> Dashboard</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<DatabaseZap className="mr-2 h-4 w-4" />
						<Link href="/manager/datasets">Datasets</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<Users2Icon className="mr-2 h-4 w-4" />
						<Link href="/manager/users">Users Assigned</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<ChartArea className="mr-2 h-4 w-4" />
						<Link href="/manager/charts">Charts</Link>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
			</CommandList>
		</Command>
	);
};
