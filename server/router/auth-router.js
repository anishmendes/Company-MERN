const express = require("express");

const router = express.Router();




router.route("/").get( (req, res)=> {
    res.status(200).send("Welcome to the anish backend website");
})




module.exports = router;