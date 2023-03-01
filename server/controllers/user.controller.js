import User from '../mongodb/models/user.js';

const getAllUsers = async (req, res) => {
    try {
        const { _end } = req.query;
        const users = await User.find({})
            .limit(_end);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, avatar } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) return res.status(200).json(userExist);

        const newUser = await User.create({
            name, email, avatar
        });

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserInfoByID = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.find({ _id: id }).populate("allProperties");

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found!' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllUsers,
    createUser,
    getUserInfoByID
}