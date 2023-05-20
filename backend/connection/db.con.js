const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error while Connecting to DB");
  }
};

module.exports = {
  connection,
};
