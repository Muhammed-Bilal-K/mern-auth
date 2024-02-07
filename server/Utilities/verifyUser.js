const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(req.cookies.access_token);

  console.log(token, "from util");

  if (!token) return res.send({ message: "You are not authenticated!'" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    console.log(user, "tocken from us util");
    const userByID = await User.findById(user.id);
    console.log(userByID, "comple");
    if (!userByID.isActive){
      res.clearCookie('access_token').status(200).json('Account has suspended!');
    }

    if (err) return res.send({ message: "tocken not valid!'" });
    else console.log("jwt verified");
    req.user = user;
    // console.log("user ", user);
    next();
  });
};

module.exports = {
  verifyToken,
};
