const User = require("../Models/user.models.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const asyncHandler = require("../utils/asynchandler.js");

const register = asyncHandler(async (req, res) => {
  const { name, email, role, dept, title } = req.body;

  if ([name, email, role, dept, title].some((item) => item?.trim() == "")) {
    throw new ApiError("Please fill all the fields", 400);
  }

  const imageURL = `https://api.dicebear.com/5.x/initials/svg?seed=${name}`;

  const newUser = await User.create({
    name,
    email,
    role,
    dept,
    title,
    img: imageURL,
  });

  res.json(new ApiResponse(200, newUser, "User created successfully"));
});

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(new ApiResponse(200, users, "Users fetched successfully"));
});

module.exports = { register, getAllUser };
