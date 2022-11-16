module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", // Needed for dynamic images
  ],
};