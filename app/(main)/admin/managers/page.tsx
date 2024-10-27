import { BackButton } from "@/components/BackButton";
import { ManagersPagination } from "@/components/datatables/managers/ManagersPagination";
import { ManagersTable } from "@/components/datatables/managers/ManagersTable";

export default function PostsPage() {
	return (
		<>
			<BackButton text="Go Back" link="/" />
			<ManagersTable title="Managers" />
			<ManagersPagination />
		</>
	);
}
