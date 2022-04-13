import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import Head from "next/head";
import Link from "next/link";

const HeaderSection = () => {
	return (
		<>
			<Head>
				<title>Isters</title>
			</Head>

			<HStack
				w={"full"}
				justify={"space-between"}
				bg={"gray.800"}
				color={"gray.50"}
				p={4}
			>
				<Link passHref href={"/"}>
					<Text fontSize={"3xl"} cursor={"pointer"}>
						Isters
					</Text>
				</Link>

				<HStack spacing={4} fontSize={"2xl"}>
					<Link passHref href={"/team-api"}>
						<Text cursor={"pointer"}>Api</Text>
					</Link>

					<Text>About</Text>
					<Text>Contribution</Text>
				</HStack>
			</HStack>
		</>
	);
};
export default HeaderSection;
