import UserSchema from "../models/user.model";
import jwt from "jsonwebtoken";
import config from "../config/config";
import expressJWT from "express-jwt";

const signin = async (req, res) => {
  try {
    let user = await UserSchema.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ error: "User not found!" });
    if (!user.authenticate(req.body.password))
      return res.status(401).json({ error: "Email and password don't match!" });

    const token = jwt.sign(
      {
        _id: user._id,
      },
      config.jwtSecret
    );

    res.cookie("t", token, { expire: new Date() + 9999 });

    return res.status(200).json({
      token: token,
      user: user,
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "Successfull signed out",
  });
};
const requireSignIn = expressJWT({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  userProperty: "auth",
});

export { signin, signout, requireSignIn };
