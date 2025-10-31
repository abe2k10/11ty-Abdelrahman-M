module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("highlight", text => `<span class="highlight">${text}</span>`);

  eleventyConfig.addCollection("carry", (collection) =>
    collection.getFilteredByGlob("carry/*.md")
  );

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
