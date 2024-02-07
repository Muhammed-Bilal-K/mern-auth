let user = require("../models/UserModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAlldetails = async (req, res, next) => {
  const allUser = await user.find({username:{$ne:"bilal"}});
  console.log(allUser);
  res.send({ message: "hello", allUser: allUser });
};

const createUser = async (req, res, next) => {
  console.log("req.body", req.body);
  const { username, email, password } = req.body;
  try {
    let ExistEmail = await user.findOne({ email: email });
    if (ExistEmail) {
      return res.send({ message: "user already exist!" });
    }

    let ExistUsername = await user.findOne({ username: username });
    if (ExistUsername) {
      return res.send({ message: "username already exist!" });
    }

    const newHashPass = bcryptjs.hashSync(password, 10);

    const allDetails = new user({
      username: username,
      email: email,
      password: newHashPass,
    });
    await allDetails.save();
    res.send({ message: "user created" });
  } catch (error) {
    // res.status(500).send(error.message);
    next(error);
  }
};

const login = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  let ExistUser = await user.findOne({ email: email });
  console.log(ExistUser);
  if (ExistUser == null) {
    return res.send({ message: "no user exist!" });
  }
  const validPassword = bcryptjs.compareSync(password, ExistUser.password);
  if (!validPassword) {
    return res.send({ message: "password doesn't matched" });
  }

  if (ExistUser.isActive === false) {
    return res.send({ message: "account has suspended!" });
  }

  let token = jwt.sign({ id: ExistUser._id }, process.env.JWT_SECRET);

  // const { password: hashPass, ...rest } = ExistUser._doc;

  console.log(token);

  const expiryDate = new Date(Date.now() + 3600000);

  console.log(expiryDate);

  res.cookie("access_token", token || "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    // credentials: "include",
    expiryDate
  });

  res.send(ExistUser);
};

// const loginAdmin = async (req, res, next) => {
//   try {
//     console.log(req.body);
//     const { email, password } = req.body;
//     let existUser = await user.findOne({ email: email });

//     if (!existUser) {
//       return res.status(404).send({ message: "No user exists!" });
//     }

//     const validPassword = bcryptjs.compareSync(password, existUser.password);
//     if (!validPassword) {
//       return res.status(401).send({ message: "Password doesn't match" });
//     }

//     const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET);
//     const expiryDate = new Date(Date.now() + 3600000);

//     // Set the cookie with the token
//     res.cookie("access_token", token, { httpOnly: true, expires: expiryDate });

//     console.log(token);

//     // Send user data without the password in response
//     // const { password: _, ...userData } = existUser._doc;
//     res.status(200).json({ existUser });
//   } catch (error) {
//     next(error); // Pass the error to the error handling middleware
//   }
// };

// const showSpecificUser = async (req, res, next) => {
//   console.log(req.params);
//   let ExistUser = await user.findOne({ _id: req.params.id });
//   res.send({ message: "specific user", ExistUser: ExistUser });
// };

// const updateUser = async (req, res, next) => {
//   console.log(req.body);
//   const { id, ...rest } = req.body;
//   let Existuser = await user.updateOne({ _id: req.body.id }, rest);
//   console.log(Existuser);
//   res.send({ message: "update check!" });
// };

const deleteUser = async (req, res, next) => {
  console.log(req.body);
  // {
  //     id: '65bc8cbd5dc3f6ab876be324',
  //     username: 'sks',
  //     email: 'sks@gmail.com'
  //   }
  console.log(req.params);
  //   { id: '65bc8cbd5dc3f6ab876be324' }
  const { id } = req.params;
  const resultInfo = await user.deleteOne({ _id: id });
  res.send({ message: "user deleted!", resultInfo: resultInfo });
};

const blockUser = async (req, res, next) => {
  try {
    let CaseActive = await user.findById({ _id: req.params.id })
    console.log(CaseActive.isActive, 'fff');
    await user.updateOne(
      { _id: req.params.id },
      {
        $set: {
          isActive: !CaseActive.isActive,
        },
      },
      {
        new: true,
      }
    ).then((result)=>{
      res.send({ message: "user deleted!", result });
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAlldetails,
  createUser,
  // updateUser,
  // showSpecificUser,
  deleteUser,
  login,
  blockUser,
};
