module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/styles.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy({ './src/img/favicon': '/' });

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
};
