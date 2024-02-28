const asyncHandler = require("express-async-handler");
const { saveMovie } = require("../services/saveMovie");

const saveNewMovie = asyncHandler(async (req, res) => {
//   console.log(req.body);
  const data = {
    title: req.body.title,
    overview: req.body.overview,
    videoId: req.body.videoId,
    vote_average: req.body.vote_average,
    vote_count: req.body.vote_count,
    poster: req.body.poster,
  };
  await saveMovie(data)
    .then(() => {
      res.status(200).send("Movie data stored");
    })
    .catch(() => {
      res.status(500).send("Internal Server error");
    });
});

module.exports = saveNewMovie;
