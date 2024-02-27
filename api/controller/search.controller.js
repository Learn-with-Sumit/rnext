const { Blog } = require("../model/blog.model");

const search = async (req, res) => {
  const searchQuery = req?.query?.q;

  if (!searchQuery) {
    return res.status(400).json({ message: "Please provide a search query" });
  }

  const blogs = Blog.findAll();

  var searchResults = blogs.filter(function (obj) {
    return obj.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (searchResults.length === 0) {
    return res.status(404).json({ message: "No results found", length: 0 });
  }

  res.status(200).json({
    length: searchResults.length,
    query: searchQuery,
    data: searchResults.map((blog) => {
      delete blog.tags;
      delete blog.comments;
      return blog;
    }),
  });
};

module.exports.SearchController = { search };
