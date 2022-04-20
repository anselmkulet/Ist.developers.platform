export const omitPassword = (inputObject) => {
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
