const user = require("../models/UserModel");
const bcryptjs = require("bcryptjs");

const home = async (req, res, next) => {
  res.send({ message: "home" });
};

const loginUser = async (req, res, next) => {
  res.send({ message: "hi from user" });
};

const showSpecificUser = async (req, res, next) => {
  console.log(req.params);
  let ExistUser = await user.findOne({ _id: req.params.id });
  res.send({ message: "specific user", ExistUser: ExistUser });
};

const updateUser = async (req, res, next) => {
  console.log(req.body);
  console.log('\\\\\\\\\\');
  console.log(req.params);
  if (req.user.id !== req.params.id) {
    return res.send({ message: "only update from your account!" });
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    await user.updateOne(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      {
        new: true,
      }
    );

    const ExistUser = await user.findOne({ _id: req.params.id })
    console.log(ExistUser, 'ffdfdfd');
    res.send({ ExistUser });
  } catch (error) {
    next(error);
  }
  // const { ...rest } = req.body;
  // let Existuser = await user.updateOne({ _id: req.params.id }, req.body);
  // console.log(Existuser);
};

const signOut = async (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout success!');
}

module.exports = {
  loginUser,
  home,
  showSpecificUser,
  updateUser,
  signOut,
};
