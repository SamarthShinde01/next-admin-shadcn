import { BackButton } from "@/components/BackButton";
import { UsersPagination } from "@/components/datatables/users/UsersPagination";
import { UsersTable } from "@/components/datatables/users/UsersTable";

export default function PostsPage() {
	return (
		<>
			<BackButton text="Go Back" link="/" />
			<UsersTable title="Users" />
			<UsersPagination />
		</>
	);
}
