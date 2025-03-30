interface RawgApiGameScreenshots {
	count: number;
	next: string;
	previous: string;
	results: {
		id: number;
		image: string;
		width: number;
		height: number;
		is_deleted: boolean;
	}[];
}

export default RawgApiGameScreenshots;
