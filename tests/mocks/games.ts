import type { Game } from "../../src/entities";

const games: Game[] = [
	{
		id: 1,
		description:
			"The Last of Us is a 2013 action-adventure game developed and published by Naughty Dog",
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
		description:
			"The Last of Us Part II is a 2020 action-adventure game developed and published by Naughty Dog",
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
		description: "The Last of Us Remastered is a 2014 action-adventure game",
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
		description: "The Legend of Zelda is a 1986 action-adventure game",
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
		description:
			"The Legend of Zelda: Ocarina of Time is a 1998 action-adventure game",
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
		description:
			"The Legend of Zelda: A Link to the Past is a 1991 action-adventure game",
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
		description:
			"The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game",
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
		description: "The Witcher 3: Wild Hunt is a 2015 role-playing game",
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
		description: "Red Dead Redemption 2 is a 2018 action-adventure game",
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
		description: "Super Mario Odyssey is a 2017 platform game",
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
		description: "Cyberpunk 2077 is a 2020 role-playing game",
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
		description: "Dark Souls III is a 2016 action role-playing game",
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
