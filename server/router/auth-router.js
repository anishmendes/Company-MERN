const express = require("express");

const router = express.Router();




router.route("/").get( (req, res)=> {
    res.status(200).send("Welcome to the anish backend website");
})

router.route("/register").get( (req, res)=> {
    res.status(200).send("Welcome to the anish register page");
})




module.exports = router;