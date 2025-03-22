const User = require("../Model/UserModel");

const getAllUsers = async(req, res, next) => {
    let users;
    // get all users
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    //not found
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }
    //Display all users
    return res.status(200).json({ users });
}

module.exports = { getAllUsers };