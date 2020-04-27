module.exports = {
	siteMetadata: {
		title: "Kate Howard",
		author: "Kate Howard",
		intro:
			"I am a front end developer based in Bristol, working mostly with React and React Native. I also have some experience with Ruby on Rails. This is where my personal projects live.",
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
				name: "Countdown",
				link: "countdown",
				tags: ["ReactJS", "Games"],
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
				name: "Games with Lines",
				link: "games-with-lines",
				tags: ["ReactJS", "Games"],
			},
			{
				name: "Typing Speed Test",
				link: "typing-speed-test",
				tags: ["ReactJS", "TypeScript", "Games"],
			},
			{
				name: "Ukulele Tuner",
				link: "ukulele-tuner",
				tags: ["Vue.js", "Web Audio API"],
			},
			{
				name: "Su Doku",
				link: "sudoku",
				tags: ["ReactJS", "Games", "Puzzles"],
			},
			{
				name: "Water Works",
				link: "water-works",
				tags: ["ReactJS"],
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
