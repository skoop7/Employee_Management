const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.URL}/${process.env.DB}`
    );
    console.log(
      `MongoDB Connected 🐨🐨🐨: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
