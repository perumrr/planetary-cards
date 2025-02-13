module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  
  eleventyConfig.addCollection("planets", function() {
    return require('./planets.json');
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};