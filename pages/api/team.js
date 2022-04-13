// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";
import nc from "next-connect";

let team = [
	{
		name: "Baraka Mulumia",
		role: "Front End Lead",
		img: "https://avatars.githubusercontent.com/u/65751779?v=4",
		dept: "Engineering",
		team: "Front End",
	},
	{
		name: "Mohammed Ahmedah",
		role: "Intern",
		img: "https://avatars.githubusercontent.com/u/92859355?v=4",
		dept: "Engineering",
		team: "Front End",
	},

	{
		name: "Brandon John Kuria Kiarie ",
		role: "Developer",
		img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		dept: "Engineering",
		team: "Front End",
	},
	{
		name: "Joyce Musungu",
		role: "Back end Lead",
		img: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		dept: "Engineering",
		team: "Front End",
	},
	{
		name: "Reuben W. Njiiri",
		role: "Developer",
		img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		dept: "Engineering",
		team: "Back end",
	},
	{
		name: "Sam Munoru Maina",
		role: "Developer",
		img: "https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		dept: "Engineering",
		team: "Back end",
	},
	{
		name: "Simon Njoroge",
		role: "Developer",
		img: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		dept: "Engineering",
		team: "Back end",
	},
	{
		name: "Stanley Mwinde Mwangangi",
		role: "Design Lead",
		img: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGFmcmljYW4lMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		dept: "Design",
		team: "UI/UX",
	},
	{
		name: "Lamech Arama Mongare",
		role: "Designer",
		img: "https://images.unsplash.com/photo-1505640070685-2a70292000ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMGFmcmljYW4lMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		dept: "Design",
		team: "UI/UX",
	},
	{
		name: "Joseph Mutuse Muola",
		role: "Designer",
		img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGFmcmljYW4lMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		dept: "Research",
		team: "UI/UX",
	},
	{
		name: "Cecilia Watiri Ndegwa",
		role: "Designer",
		img: "https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGUlMjBhZnJpY2FuJTIwZmVtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		dept: "Marketing",
		team: "UI/UX",
	},
	{
		name: "Maurice Mbuda Byron",
		role: "Dev Ops Lead",
		img: "https://images.unsplash.com/photo-1549231002-b646f10d678a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBhZnJpY2FuJTIwbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		dept: "Engineering",
		team: "Dev Ops",
	},
	{
		name: "Kelvin Ndiragu",
		role: "Dev Sec Ops",
		img: "https://avatars.githubusercontent.com/u/97525319?v=4",
		dept: "Engineering",
		team: "Dev Ops",
	},
];

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
		res.status(200).json(team);
	})
	.post((req, res) => {
		res.json({ hello: "world" });
	});

export default handler;
