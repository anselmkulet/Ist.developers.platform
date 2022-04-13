import { Box, Link, Text, VStack } from "@chakra-ui/react";

import HeaderSection from "../components/HeaderSection";

export default function Home() {
	return (
		<Box w={"full"}>
			<main w={"full"}>
				<HeaderSection />
				<VStack
					bg={"whiteAlpha.900"}
					h={"calc(100vh - 100px)"}
					justify={"center"}
					w={"full"}
				>
					<Text w={"50%"} p={4} fontWeight={500} fontSize={"2xl"}>
						API DOCUMENTATION COMING SOON Visit <br />
						<Link
							color={"slateblue"}
							href={
								"https://ist-developers-platform.vercel.app/api/team"
							}
							target={"_blank"}
							rel={"noreferrer"}
						>
							https://ist-developers-platform.vercel.app/api/team
						</Link>
					</Text>
				</VStack>
			</main>
		</Box>
	);
}
