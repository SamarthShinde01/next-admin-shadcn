import {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
} from "@/components/ui/table";
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";

interface PostsTableProps {
	limit?: number;
	title?: string;
}

export const PostsTable = ({ limit, title }: PostsTableProps) => {
	//sort post in desc order based on date
	const sortedPosts: Post[] = [...posts].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	//filter posts to limit
	const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

	return (
		<div className="mt-8">
			<h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
			<Table>
				<TableCaption>A list of recent posts</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="hidden md:table-cell">#</TableHead>
						<TableHead>Title</TableHead>

						<TableHead className="hidden md:table-cell">Author</TableHead>
						<TableHead className="hidden md:table-cell ">Date</TableHead>
						<TableHead className="hidden md:table-cell">View</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filteredPosts.map((post, index) => (
						<TableRow key={post.id}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{post.title}</TableCell>
							<TableCell className="hidden md:table-cell">
								{post.author}
							</TableCell>
							<TableCell className="hidden md:table-cell ">
								{post.date}
							</TableCell>
							<TableCell>
								<Link href={`/posts/edit/${post.id}`}>
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
										Edit
									</button>
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
