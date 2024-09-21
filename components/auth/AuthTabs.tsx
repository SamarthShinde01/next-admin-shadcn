import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AuthTabs = () => {
	return (
		<Tabs defaultValue="login" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="login">login</TabsTrigger>
				<TabsTrigger value="register">register</TabsTrigger>
			</TabsList>
			<TabsContent value="login">LOGIN</TabsContent>
			<TabsContent value="register">REGISTER</TabsContent>
		</Tabs>
	);
};
