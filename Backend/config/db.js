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
      //   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTgwMzlmZDk1NWIzMzA5YzQwYmUxNiIsImlhdCI6MTc0MzI1ODY4MSwiZXhwIjoxNzQzMjYyMjgxfQ.369vTC2yoAjD09u5sH0VCX3DYFMsIp2A6hlTi1cykRE
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
