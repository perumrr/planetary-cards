module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("planets", function(collectionApi) {
    return collectionApi.getFilteredByGlob("planets.json");
  });
  eleventyConfig.addPassthroughCopy("styles");
};

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
  };
};
