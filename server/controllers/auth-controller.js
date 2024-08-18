const User = require("../models/user-model");




const home = async (req, res) => {
    try {

        res
        .status(200)
        .send("Welcome to the anish backend website");
        
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const {username, email, phone, password,course} = req.body;

        const userExist =await User.findone({email});   

        if(userExist) {
            return res.status(400).json({msg:"email already exists"});
        }

        await User.create({ username, email, phone, password,course})

        res.status(200).json({data});
        
    } catch (error) {
       res.status(400).json({msg:"page not found"})
    }
}

module.exports = {home, register};