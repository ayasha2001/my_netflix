require('dotenv').config();
const express = require('express');
const { createServer } = require('node:http');
const connectDB=require('./config/databse')
const port = process.env.PORT;

const app = express();
connectDB()
app.use(express.json())
const server = createServer(app);

server.listen(port, () => {
  console.log('Baby Ayasha Server',port);
});