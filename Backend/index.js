const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./DB");
const userRoute = require("./Routes/user.routes.js");
const cors = require("cors");

dotenv.config({
  path: "./.env",
});

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api/v1", userRoute);

connectDB()
  .then(() => {
    console.log("Server is up and Running 🚀🚀");
  })
  .catch(() => {
    console.log("Error connecting MongoDB Server 😭😭");
  });

app.listen(PORT, () => {
  console.log("Server is running on PORT ", PORT);
});
