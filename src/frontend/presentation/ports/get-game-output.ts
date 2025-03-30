interface GetGameOutput {
	id: string;
	name: string;
	image: string;
	released: string;
	description: string;
	genres: {
		id: string;
		name: string;
	}[];
	platforms: {
		id: string;
		name: string;
	}[];
}

export default GetGameOutput;
