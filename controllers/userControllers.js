const User = require("../models/User")

const userControllers = {

    addNewUser: async (req, res) => {
        const {name, email, password} = req.body
        const newUser = new User({name, email, password})
        try {
            let repeatedUser = await User.findOne({email: email})
            if (repeatedUser) throw new Error
            await newUser.save()
            res.json({success: true, response: {name: newUser.name, _id: newUser._id}, error: null})
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    }, 


} 

module.exports = userControllers