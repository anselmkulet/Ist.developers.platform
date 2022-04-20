// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";
import { TEAM } from "../../lib/data";
import nc from "next-connect";
import { omitPassword } from "../../lib/fn";

const handler = nc({
	onError: (err, req, res, next) => {
		console.error(err.stack);
		res.status(500).end("Something broke!");
	},
	onNoMatch: (req, res) => {
		res.status(404).end("Page is not found");
	},
})
	.get(async (req, res) => {
		await NextCors(req, res, {
			// Options
			methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
			origin: "*",
			optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
		});
		res.status(200).json(TEAM.map(omitPassword));
	})
	.post((req, res) => {
		res.json({ hello: "world" });
	});

export default handler;
