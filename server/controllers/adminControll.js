let user = require("../models/UserModel");
const bcryptjs = require("bcryptjs");

const getAlldetails = async (req, res, next) => {
  const allUser = await user.find({});
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
    res.status(500).send(error.message);
  }
};

const loginAdmin = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  let ExistUser = await user.findOne({ email: email });
  console.log(ExistUser);
  if (ExistUser == null) {
    return res.send({ message: "no user exist!" });
  }

  if (ExistUser.password != password) {
    return res.send({ message: "password doesn't matched" });
  }

  return res.send({ ExistUser });
};

const showSpecificUser = async (req, res, next) => {
  console.log(req.params);
  let ExistUser = await user.findOne({ _id: req.params.id });
  res.send({ message: "specific user", ExistUser: ExistUser });
};

const updateUser = async (req, res, next) => {
  console.log(req.body);
  const { id, ...rest } = req.body;
  let Existuser = await user.updateOne({ _id: req.body.id }, rest);
  console.log(Existuser);
  res.send({ message: "update check!" });
};

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

module.exports = {
  getAlldetails,
  createUser,
  updateUser,
  showSpecificUser,
  deleteUser,
  loginAdmin,
};
