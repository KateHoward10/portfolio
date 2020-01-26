module.exports = {
	siteMetadata: {
		title: "Kate Howard",
		author: "Kate Howard",
		intro:
			"I am a front end developer based in Bristol, working mostly with React and React Native. This is where my personal projects live.",
		projects: [
			{
				name: "Music Connections Quiz",
				link: "music-connections-quiz",
				tags: ["ReactJS", "Quiz", "Audio"],
			},
			{
				name: "Briz Quiz List",
				link: "quiz-lister",
				url: "https://brizquizlist.herokuapp.com",
				tags: ["Ruby on Rails", "Google Maps"],
			},
			{
				name: "Snek",
				link: "snek",
				tags: ["ReactJS", "Games"],
			},
			{
				name: "Pairs",
				link: "pairs",
				tags: ["ReactJS", "Games", "Audio"],
			},
			{
				name: "Tree Decorator",
				link: "tree-decorator",
				tags: ["VanillaJS", "SVGs", "Christmas"],
			},
			{
				name: "Water Works",
				link: "water-works",
				tags: ["ReactJS"],
			},
			{
				name: "Games with Lines",
				link: "games-with-lines",
				tags: ["ReactJS", "Games"],
			},
			{
				name: "Countdown",
				link: "countdown",
				tags: ["ReactJS", "Games"],
			},
			{
				name: "Su Doku",
				link: "sudoku",
				tags: ["ReactJS", "Games", "Puzzles"],
			},
		],
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/`,
			},
		},
	],
}
