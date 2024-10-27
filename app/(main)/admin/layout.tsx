import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/sidebars/AdminSidebar";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar dashName="Admin Dashboard" />
			<div className="flex">
				<div className="hidden md:block h-[100vh] w-[300px ]">
					<Sidebar />
				</div>
				<div className="p-5 w-full md:w-10/12"> {children}</div>
			</div>
		</>
	);
}
