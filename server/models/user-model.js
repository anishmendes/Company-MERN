const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require:true,
    },
    phone: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    course: {
        type: [String],
        enum: ['dancing', 'photography', 'videoediting', 'digitalmarketing'],
        default: [],  // Defaults to an empty array if no courses are selected
    },

})

const User = new mongoose.model("User", userSchema);

module.exports = User;