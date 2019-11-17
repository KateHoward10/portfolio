module.exports = {
	siteMetadata: {
		title: "Kate L. Howard’s Portfolio",
		author: "Kate L. Howard",
		intro:
			"I am a front end developer based in Bristol, working mostly with React and React Native. Here are some of my personal projects.",
		projects: [
			{
				name: "Music Connections Quiz",
				link: "music-connections-quiz",
				desc: "16 rounds of thematically linked music intros",
			},
			{
				name: "Games with Lines",
				link: "games-with-lines",
				desc: "Play Noughts and Crosses and/or Connect 4, in React!",
			},
			{
				name: "Tree Decorator",
				link: "tree-decorator",
				desc:
					"A fun project for Christmas, with snow, sparkles, and lots of emojis",
			},
			{
				name: "Snek",
				link: "snek",
				desc: "The classic game of snake, with emojis for food",
			},
			{
				name: "Countdown",
				link: "countdown",
				desc: "The numbers round recreated in React, with hot-formula-parser",
			},
			{
				name: "Water Works",
				link: "water-works",
				desc:
					"An interview challenge allowing the user to record their water consumption",
			},
			{
				name: "Weather App",
				link: "weather-app",
				desc: "An interview challenge which now uses OpenWeatherMap",
				comingSoon: true,
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
