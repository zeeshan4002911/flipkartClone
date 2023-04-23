const User = require('../model/user-schema.js');

const userSignup = async (req, res) => {
    try {

        const user_exist = await User.findOne({ username: req.body.username })
        if (user_exist) {
            return res.status(401).json({
                status: 'Failed',
                message: 'User Already Exists'
            })
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save()

        return res.status(200).json({
            status: 'Success',
            message: user
        })
        
    } catch (err) {
        return res.status(500).json({
            status: 'Failed',
            message: err.message
        })
    }
}

module.exports = { userSignup }