/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fauchet.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"],
      },
    ],
  },
};
