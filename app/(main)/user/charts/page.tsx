import { BackButton } from "@/components/BackButton";
import { ChartsPagination } from "@/components/datatables/charts/ChartsPagination";
import { ChartsTable } from "@/components/datatables/charts/ChartsTable";

export default function PostsPage() {
	return (
		<>
			<BackButton text="Go Back" link="/" />
			<ChartsTable title="Charts" />
			<ChartsPagination />
		</>
	);
}
