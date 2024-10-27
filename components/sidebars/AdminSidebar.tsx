import {
	Command,
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
	UserCheck,
	Users2Icon,
	DownloadIcon,
} from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
	return (
		<Command className="bg-secondary rounded-none">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				{/* <CommandEmpty>No results found.</CommandEmpty> */}
				<CommandGroup className="m-0 p-0">
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<LayoutDashboard className="mr-2 h-4 w-4 " />
						<Link href="/admin"> Dashboard</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<DatabaseZap className="mr-2 h-4 w-4" />
						<Link href="/admin/datasets">Datasets</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<ChartArea className="mr-2 h-4 w-4" />
						<Link href="/admin/charts">Charts</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<UserCheck className="mr-2 h-4 w-4" />
						<Link href="/admin/managers">Managers</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<Users2Icon className="mr-2 h-4 w-4" />
						<Link href="/admin/users">Users</Link>
					</CommandItem>
					<CommandItem className="border border-t border-slate-200 hover:border-slate-400 rounded-none py-3">
						<DownloadIcon className="mr-2 h-4 w-4" />
						<Link href="/admin/download">Download Dataset</Link>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
			</CommandList>
		</Command>
	);
};
