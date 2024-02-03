const home = async (req,res,next) => {
    res.send({message:"home"});
}

const loginUser = async (req, res, next) => {
    res.send({message : "hi from user"});
}

module.exports = {
    loginUser,
    home,
}