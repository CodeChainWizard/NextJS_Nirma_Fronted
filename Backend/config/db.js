const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log("DataBase URL: ", process.env.MONGO_URI);
    await mongoose.connect(
      "mongodb+srv://dhruv:Dhruv$123@cluster0.dae2rdf.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
