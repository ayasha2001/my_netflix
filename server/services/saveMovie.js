const asyncHandler = require("express-async-handler");
const movieModel = require("../models/movieModel");

const saveMovie = asyncHandler(async (data) => {
  console.log(data);
  await movieModel.create({
    title: data.title,
    overview: data.overview,
    // id: data.id,
    videoId: data.videoId,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
    poster: data.poster,
  });
});

module.exports = { saveMovie };
