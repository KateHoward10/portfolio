module.exports = {
  siteMetadata: {
    title: "Kate Howard",
    author: "Kate Howard",
    intro: [
      "I am a front end developer based in Bristol, working mostly with React and React Native.",
      "Over the years I have also picked up a bit of Ruby on Rails, Python and SQL, and experimented with other frameworks such as Vue.",
      "This is where my personal projects live."],
    projects: [
      {
        name: "Music Connections Quiz",
        link: "music-connections-quiz",
        tags: ["ReactJS", "TypeScript", "Quiz", "Audio"],
      },
      // {
      //   name: "Briz Quiz List",
      //   link: "brizquizlist",
      //   url: "https://www.brizquizlist.co.uk",
      //   tags: ["Ruby on Rails", "Google Maps"],
      // },
      {
        name: "Countdown",
        link: "countdown",
        tags: ["ReactJS", "Games"],
      },
      {
        name: "Hangman",
        link: "hangman",
        url: "https://vue-hangman.herokuapp.com",
        tags: ["Vue.js", "Express", "WebSockets", "Games"],
      },
      {
        name: "Snek",
        link: "snek",
        tags: ["ReactJS", "Games"],
      },
      {
        name: "Colour Sort",
        link: "colour-sort",
        tags: ["Vue.js", "Games", "Audio"],
      },
      {
        name: "Flags of the World",
        link: "flags-of-the-world",
        url: "https://flagsoftheworld.herokuapp.com",
        tags: ["ReactJS", "Quiz", "Express", "WebSockets"],
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
      // {
      //   name: "Typing Speed Test",
      //   link: "typing-speed-test",
      //   tags: ["ReactJS", "TypeScript", "Games"],
      // },
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
    {
      resolve: `gatsby-plugin-emoji-favicon`,
      options: {
        emoji: "📖",
      },
    },
  ],
}
