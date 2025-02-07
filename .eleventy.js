module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("planets", (collectionApi) => {
    const planets = require("./src/_data/planets.json");
    return planets;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };
};
