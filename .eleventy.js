const embedEverything = require("eleventy-plugin-embed-everything");

module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy({ './src/img/favicon': '/' });

  // Elventy Plugins
  eleventyConfig.addPlugin(embedEverything);

  // Add a custom 'posts' collection
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/post/**/*.{md,html,njk}");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
