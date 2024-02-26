const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL

module.exports = function()
{
  mongoose.connect(DB_URL)
  .then(function()
  {
    console.log("connected to db")
  })
  .catch(function(error)
  {
    console.log("db connection error" , error)
  })

}