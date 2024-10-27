import { BackButton } from "@/components/BackButton";
import { DatasetPagination } from "@/components/datatables/datasets/DatasetsPagination";
import { DatasetTable } from "@/components/datatables/datasets/DatasetsTable";

export default function PostsPage() {
	return (
		<>
			<BackButton text="Go Back" link="/" />
			<DatasetTable title="Charts" />
			<DatasetPagination />
		</>
	);
}
