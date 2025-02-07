module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");{
    const planets = require('./planets.json');
    return [
      { 
        name: "Sun",
        type: "G2V",
        color: "#ffd700",  
        au: 0
      },
      ...planets
    ];
  };



  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  };
};