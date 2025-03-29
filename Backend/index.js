const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/user.js");
require("dotenv").config();

global.USER_DATA = { name :  "raju", mac: "123"};

const app = express();

connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
