module.exports = {
  siteMetadata: {
    title: 'LYKY',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
          printRejected: false,
          develop: false,
          tailwind: true
      }
  },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
  ],
};
