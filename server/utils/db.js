const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;


const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log('connection is succesfully done ');
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;