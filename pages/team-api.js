import { Box, Text, VStack } from "@chakra-ui/react";

import HeaderSection from "../components/HeaderSection";

export default function Home() {
	return (
		<Box>
			<main>
				<HeaderSection />
				<VStack
					bg={"whiteAlpha.900"}
					h={"calc(100vh - 100px)"}
					justify={"center"}
				>
					<Text w={"80%"} p={4} fontWeight={500} fontSize={"2xl"}>
						API DOCUMENTATION COMING SOON Visit [API_URL]
					</Text>
				</VStack>
			</main>
		</Box>
	);
}
