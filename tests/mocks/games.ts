import type { Game } from "../../src/entities";

const games: Game[] = [
	{
		id: 1,
		name: "The Last of Us",
		image: "",
		released: "2013-06-14",
		genres: [
			{
				id: 1,
				name: "Action-adventure",
			},
		],
		platforms: [
			{
				id: 1,
				name: "PlayStation 3",
			},
		],
	},
	{
		id: 2,
		name: "The Last of Us Part II",
		image: "",
		released: "2020-10-29",
		genres: [
			{
				id: 1,
				name: "Action-adventure",
			},
		],
		platforms: [
			{
				id: 1,
				name: "PlayStation 4",
			},
		],
	},
	{
		id: 3,
		name: "The Last of Us Remastered",
		image: "",
		released: "2014-07-29",
		genres: [
			{
				id: 1,
				name: "Action-adventure",
			},
		],
		platforms: [
			{
				id: 2,
				name: "PlayStation 4",
			},
		],
	},
	{
		id: 4,
		name: "The Legend of Zelda",
		image: "",
		released: "1986-02-21",
		genres: [
			{
				id: 2,
				name: "Action-adventure",
			},
		],
		platforms: [
			{
				id: 3,
				name: "Nintendo Entertainment System",
			},
		],
	},
	{
		id: 5,
		name: "The Legend of Zelda: Ocarina of Time",
		image: "",
		released: "1998-11-21",
		genres: [
			{
				id: 2,
				name: "Action-adventure",
			},
		],
		platforms: [
			{
				id: 4,
				name: "Nintendo 64",
			},
		],
	},
	{
		id: 6,
		name: "The Legend of Zelda: A Link to the Past",
		image: "",
		released: "1991-09-14",
		genres: [
			{
				id: 2,
				name: "Action-adventure",
			},
		],
		platforms: [
			{
				id: 5,
				name: "Super Nintendo Entertainment System",
			},
		],
	},
	{
		id: 7,
		name: "The Legend of Zelda: Breath of the Wild",
		image: "",
		released: "2017-03-03",
		genres: [
			{
				id: 2,
				name: "Action-adventure",
			},
		],
		platforms: [
			{
				id: 6,
				name: "Nintendo Switch",
			},
		],
	},
	{
		id: 8,
		name: "The Witcher 3: Wild Hunt",
		image: "",
		released: "2015-05-19",
		genres: [
			{
				id: 3,
				name: "Role-playing",
			},
		],
		platforms: [
			{
				id: 7,
				name: "PC",
			},
		],
	},
	{
		id: 9,
		name: "Red Dead Redemption 2",
		image: "",
		released: "2018-10-26",
		genres: [
			{
				id: 4,
				name: "Action-adventure",
			},
		],
		platforms: [
			{
				id: 8,
				name: "PlayStation 4",
			},
			{
				id: 9,
				name: "Xbox One",
			},
		],
	},
	{
		id: 10,
		name: "Super Mario Odyssey",
		image: "",
		released: "2017-10-27",
		genres: [
			{
				id: 5,
				name: "Platform",
			},
		],
		platforms: [
			{
				id: 6,
				name: "Nintendo Switch",
			},
		],
	},
	{
		id: 11,
		name: "Cyberpunk 2077",
		image: "",
		released: "2020-12-10",
		genres: [
			{
				id: 6,
				name: "Role-playing",
			},
		],
		platforms: [
			{
				id: 7,
				name: "PC",
			},
			{
				id: 8,
				name: "PlayStation 4",
			},
			{
				id: 9,
				name: "Xbox One",
			},
		],
	},
	{
		id: 12,
		name: "Dark Souls III",
		image: "",
		released: "2016-03-24",
		genres: [
			{
				id: 7,
				name: "Action role-playing",
			},
		],
		platforms: [
			{
				id: 7,
				name: "PC",
			},
			{
				id: 8,
				name: "PlayStation 4",
			},
			{
				id: 9,
				name: "Xbox One",
			},
		],
	},
];

export default games;
