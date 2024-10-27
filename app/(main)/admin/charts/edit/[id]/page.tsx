"use client";
import { BackButton } from "@/components/BackButton";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";

const formSchema = z.object({
	title: z.string().min(1, { message: "title is required" }),
	body: z.string().min(1, { message: "body is required" }),
	author: z.string().min(1, { message: "author is required" }),
	date: z.string().min(1, { message: "date is required" }),
});

interface PostEditPageProps {
	params: {
		id: string;
	};
}

export default function EditPosts({ params }: PostEditPageProps) {
	const post = posts.find((post) => post.id === params.id);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: post?.title || "",
			body: post?.body || "",
			author: post?.author || "",
			date: post?.date,
		},
	});

	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		console.log("submit");
	};

	return (
		<>
			<BackButton text="Back To Posts" link="/posts" />
			<h2 className="text-2xl mb-4">Edit Post</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
									Title
								</FormLabel>
								<FormControl>
									<Input
										className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black dark:text-white"
										placeholder="Enter Title"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="body"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
									Body
								</FormLabel>
								<FormControl>
									<Textarea
										className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black dark:text-white"
										placeholder="Enter Title"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="author"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
									Author
								</FormLabel>
								<FormControl>
									<Input
										className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black dark:text-white"
										placeholder="Enter Title"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
									Date
								</FormLabel>
								<FormControl>
									<Input
										className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black dark:text-white"
										placeholder="Enter Title"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button className="w-full dark:bg-slate-800 dark:text-white">
						Update Post
					</Button>
				</form>
			</Form>
		</>
	);
}
