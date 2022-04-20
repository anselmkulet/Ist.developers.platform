import { Box, Text, VStack } from "@chakra-ui/react";

import HeaderSection from "../components/HeaderSection";

export default function Home() {
	return (
		<Box>
			<main>
				<HeaderSection />
				<VStack
					bg={"whiteAlpha.900"}
					minH={"calc(100vh - 100px)"}
					justify={"center"}
				>
					<Text w={"80%"} p={4} fontWeight={500} fontSize={"2xl"}>
						“Here&apos;s to the crazy ones. The misfits. The rebels.
						The troublemakers. The round pegs in the square holes.
						The ones who see things differently. They&apos;re not
						fond of rules. And they have no respect for the status
						quo. You can quote them, disagree with them, glorify or
						vilify them. About the only thing you can&apos;t do is
						ignore them. Because they change things. They push the
						human race forward. And while some may see them as the
						crazy ones, we see genius. Because the people who are
						crazy enough to think they can change the world, are the
						ones who do.”
					</Text>
				</VStack>
			</main>
		</Box>
	);
}
