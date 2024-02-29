const asyncHandler = require("express-async-handler");
const getNowPlayingMovies = require("../services/getNowPlayingMovies");

const fetchNowPlayingMovies = asyncHandler(async (req, res) => {
  console.log("fetchNowPlayingMoviess");
  await getNowPlayingMovies()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send("Internal Server Error ", error.body);
    });
});

module.exports = fetchNowPlayingMovies;
