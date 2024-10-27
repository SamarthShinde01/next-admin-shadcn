import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { DatabaseZap, ChartArea } from "lucide-react";

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
			</div>
			<AnalyticsChart />
		</>
	);
}
