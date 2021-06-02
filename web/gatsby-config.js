// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Droid+Serif:400,400i,700,700i`,
          `Montserrat:400,700`,
          `Mr+De+Havilandi`,
          `Open+Sans:300,400,600,700,800`,
          `Raleway:100,200,300,300i,400,400i,500,600,700,700i,800,900`,
        ],
        subset: "cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese",
      },
    },
  ],
};
