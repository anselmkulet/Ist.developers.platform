// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import NextCors from "nextjs-cors";
import { TEAM } from "../../lib/data";
import nc from "next-connect";

const omitPassword = (inputObject) => {
	const filteredObjects = Object.keys(inputObject)
		.filter((key) => key !== "password")
		.map((key) => ({
			[key]: inputObject[key],
		}));

	const newObject = {};
	for (let item of filteredObjects) {
		newObject[Object.keys(item)[0]] = item[Object.keys(item)[0]];
	}
	return newObject;
};

const handler = nc({
	onError: (err, req, res, next) => {
		console.error(err.stack);
		res.status(500).end("Something broke!");
	},
	onNoMatch: (req, res) => {
		res.status(404).end("Page is not found");
	},
}).post(async (req, res) => {
	const { name, password } = JSON.parse(req.body);
	await NextCors(req, res, {
		methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
		origin: "*",
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	});
	const user = TEAM.find(
		(user) => user.name === name && user.password === password
	);
	if (user) {
		res.status(200).json({ SUCCESS: true, data: omitPassword(user) });
	} else {
		res.status(404).json({ SUCCESS: false, error: "User NOT Found" });
	}
});

export default handler;
