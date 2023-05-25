const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
//db details
//pass:testing 123
//projname:MongoTechNotes
//dbname:TechNote
//user:employee
