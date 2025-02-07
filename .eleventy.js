module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  
  eleventyConfig.addCollection("planets", function(api) {
    const planetsData = require('./planets.json');
    return planetsData;
  });

  return {  
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    }
  };
};