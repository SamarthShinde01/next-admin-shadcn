import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import {
	DatabaseZap,
	ChartArea,
	UserCheck,
	Users2Icon,
	DownloadIcon,
} from "lucide-react";

export default function Home() {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">
				<DashboardCard
					title="Charts"
					count={100}
					icon={<ChartArea className="text-slate-500 " size={45} />}
				/>
				<DashboardCard
					title="Datasets"
					count={15}
					icon={<DatabaseZap className="text-slate-500 " size={45} />}
				/>
				<DashboardCard
					title="Managers"
					count={750}
					icon={<UserCheck className="text-slate-500 " size={45} />}
				/>
				<DashboardCard
					title="Users"
					count={1200}
					icon={<Users2Icon className="text-slate-500 " size={45} />}
				/>
				<DashboardCard
					title="Downloads"
					count={1200}
					icon={<DownloadIcon className="text-slate-500 " size={45} />}
				/>
			</div>
			<AnalyticsChart />
		</>
	);
}
