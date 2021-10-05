import userModel from "../models/user.model";

const getUsers = async (req, res) => {
  try {
    let users = await userModel.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

const createUser = async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "user saved",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};

export { getUsers, createUser };
