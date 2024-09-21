import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { PostsTable } from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, Users } from "lucide-react";

export default function Home() {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
				<DashboardCard
					title="Posts"
					count={100}
					icon={<Newspaper className="text-slate-500 " size={45} />}
				/>
				<DashboardCard
					title="Categories"
					count={15}
					icon={<Folder className="text-slate-500 " size={45} />}
				/>
				<DashboardCard
					title="Users"
					count={750}
					icon={<Users className="text-slate-500 " size={45} />}
				/>
				<DashboardCard
					title="Comments"
					count={1200}
					icon={<MessageCircle className="text-slate-500 " size={45} />}
				/>
			</div>
			<PostsTable title="Latest Posts" limit={5} />
		</>
	);
}
