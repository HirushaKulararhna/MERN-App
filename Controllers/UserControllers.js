const User = require("../Model/UserModel");

///      data Display             ///
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

///      data insert             ///
const addUsers = async(req, res, next) => {
    const { name, email, age, address } = req.body;

    let users;

    try {
        users = new User({
            name,
            email,
            age,
            address
        });
        await users.save();
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "Unable to add user" });
    }

    return res.status(200).json({ users });         
}

///      Get By Id             ///
const getById = async(req, res, next) => {
    const id = req.params.id;
    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }

    // Not available users
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
}

module.exports = { getAllUsers, addUsers, getById };

