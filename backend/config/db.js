const mongoose = require("mongoose");
// let dbUrl =
//   "mongodb+srv://aswinsprojects:d5qj4Bh8Z7zFfEOZ@cluster0.0tejhhr.mongodb.net/";
let dbUrl = "mongodb+srv://aswins:bNGVIGxlfobQguDy@cluster0.b5nlk.mongodb.net/";
mongoose.set("strictQuery", true);

module.exports.connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(dbUrl);
    console.log("Mongodb Database connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
