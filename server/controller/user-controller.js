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

const userLogin = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username, password: req.body.password });

        if (!user) {
            return res.status(401).json({
                status: 'Failed',
                message: 'Invalid Login'
            })
        }

        return res.status(200).json({
            status: 'Success',
            message: 'Login Succesfull'
        })

    } catch (err) {
        return res.status(500).json({
            status: 'Failed',
            message: err.message
        })
    }
}

module.exports = { userSignup, userLogin }