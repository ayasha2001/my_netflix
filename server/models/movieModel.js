// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new Schema(
  {
    title: String,
    overview: String,
    id: String,
    videoId: String,
    vote_average: String,
    vote_count: String,
    poster: String,
  },
);

const movieModel = mongoose.model("movieModel", MovieSchema);

module.exports = movieModel;
