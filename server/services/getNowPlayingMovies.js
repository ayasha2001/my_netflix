const asyncHandler = require("express-async-handler");
const movieModel = require("../models/movieModel");

const getNowPlayingMovies = asyncHandler(async () => {
  const entries = await movieModel.find().exec();
  return entries;
});

module.exports = getNowPlayingMovies;
