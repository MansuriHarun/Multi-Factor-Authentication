const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => {
      console.log("Database connection error: " + err);
    });
};

module.exports = connectDatabase;