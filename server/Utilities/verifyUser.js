// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;

//   console.log(token);

//   if (!token) return res.send({ message: "You are not authenticated!'" });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (!err) return res.send({ message: "Token is not valid!" });

//     req.user = user;
//     next();
//   });
// };

// module.exports = {
//   verifyToken,
// };

const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  console.log(token);

  if (!token) return res.send({ message: "You are not authenticated!'" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    console.log(user)
    const userByID = await User.findById(user.id);
    // console.log(userByID);
    // if (!userByID.isActive) return next(errorHandler(403, "User is blocked!"));

    if (err) return res.send({ message: "tocken not valid!'" });
    else console.log("jwt verified");
    req.user = user;
    console.log(req.user);
    // console.log("user ", user);
    next();
  });
};

module.exports = {
  verifyToken,
};
