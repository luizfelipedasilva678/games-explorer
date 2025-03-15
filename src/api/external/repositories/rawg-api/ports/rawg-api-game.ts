interface RawgApiGame {
	id: number;
	slug: string;
	name: string;
	name_original: string;
	description: string;
	metacritic: number;
	metacritic_platforms: MetacriticPlatform[];
	released: string;
	tba: boolean;
	updated: string;
	background_image: string;
	background_image_additional: string;
	website: string;
	rating: number;
	rating_top: number;
	ratings: Rating[];
	reactions: Reactions;
	added: number;
	added_by_status: AddedByStatus;
	playtime: number;
	screenshots_count: number;
	movies_count: number;
	creators_count: number;
	achievements_count: number;
	parent_achievements_count: number;
	reddit_url: string;
	reddit_name: string;
	reddit_description: string;
	reddit_logo: string;
	reddit_count: number;
	twitch_count: number;
	youtube_count: number;
	reviews_text_count: number;
	ratings_count: number;
	suggestions_count: number;
	alternative_names: string[];
	metacritic_url: string;
	parents_count: number;
	additions_count: number;
	game_series_count: number;
	user_game: any;
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	parent_platforms: ParentPlatform[];
	platforms: Platform3[];
	stores: Store[];
	developers: Developer[];
	genres: Genre[];
	tags: Tag[];
	publishers: Publisher[];
	esrb_rating: EsrbRating;
	clip: any;
	description_raw: string;
}

interface MetacriticPlatform {
	metascore: number;
	url: string;
	platform: Platform;
}

interface Platform {
	platform: number;
	name: string;
	slug: string;
}

interface Rating {
	id: number;
	title: string;
	count: number;
	percent: number;
}

type Reactions = Record<string, number>;

interface AddedByStatus {
	yet: number;
	owned: number;
	beaten: number;
	toplay: number;
	dropped: number;
	playing: number;
}

interface ParentPlatform {
	platform: Platform2;
}

interface Platform2 {
	id: number;
	name: string;
	slug: string;
}

interface Platform3 {
	platform: Platform4;
	released_at: string;
	requirements: Requirements;
}

interface Platform4 {
	id: number;
	name: string;
	slug: string;
	image: any;
	year_end: any;
	year_start?: number;
	games_count: number;
	image_background: string;
}

interface Requirements {
	minimum?: string;
	recommended?: string;
}

interface Store {
	id: number;
	url: string;
	store: Store2;
}

interface Store2 {
	id: number;
	name: string;
	slug: string;
	domain: string;
	games_count: number;
	image_background: string;
}

interface Developer {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

interface Genre {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

interface Tag {
	id: number;
	name: string;
	slug: string;
	language: string;
	games_count: number;
	image_background: string;
}

interface Publisher {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

interface EsrbRating {
	id: number;
	name: string;
	slug: string;
}

export default RawgApiGame;
