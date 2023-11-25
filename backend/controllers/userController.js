import asyncHandler from "express-async-handler";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
});

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).send("Auth user");
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).send("Auth user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).send("Auth user");
});

// @desc    Get user profile
// @route   PUT /api/users/profile
// @access  Public
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).send("Auth user");
});

export {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
