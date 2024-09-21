import { BackButton } from "@/components/BackButton";
import { PostsPagination } from "@/components/posts/PostsPagination";
import { PostsTable } from "@/components/posts/PostsTable";

export default function PostsPage() {
	return (
		<>
			<BackButton text="Go Back" link="/" />
			<PostsTable />
			<PostsPagination />
		</>
	);
}
