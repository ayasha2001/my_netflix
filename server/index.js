require("dotenv").config();
const express = require("express");
const { createServer } = require("node:http");
const connectDB = require("./config/databse");
const port = process.env.PORT;
const getNowPlayingMovies = require("./controllers/getNowPlayingMovies");
const saveNewMovie = require("./controllers/saveNewMovie");

const app = express();
connectDB();
app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow requests from this origin
//     optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
//   }));
  
const server = createServer(app);

app.get("/now-playing", getNowPlayingMovies);
app.post("/save-movie", saveNewMovie);

server.listen(port, () => {
  console.log("Baby Ayasha Server", port);
});
