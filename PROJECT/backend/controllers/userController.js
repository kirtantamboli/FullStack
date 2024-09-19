
const User = require('./../models/userModel')
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {

    //check if user already exists ..
    try {
        const { email } = req.body
        const isExistingUser = await User.findOne({ email });

        if (isExistingUser) {
            res.status(400).send("User already exists")
        }

        const user = await User.create(req.body)

        if (user) {
            res.status(201).json({
                message: "User created Successfully",
                data: user
            })
        }
    } catch (error) {
        res.status(400).json({message:error});
    }
}

exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        console.log(user);
        if (!user) {
            return res.status(400).send('User is not registered, Please register and try again')
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if (!isPasswordMatch) {
            return res.status(400).send('Password do not Match')
        }
        res.status(200).json({
            message:"Login Successful"
        })
    } catch (error) {
        res.status(400).json({message:error});
    }
}
