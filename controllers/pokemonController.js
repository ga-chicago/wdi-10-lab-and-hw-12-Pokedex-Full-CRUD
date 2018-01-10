const express = require("express");
const router = express.Router();
const pokemon = require("../models/pokemon.js");



// Index Route
router.get("/", (req, res) => {
	res.send("Check the terminal");
	console.log("Hit the index route");
});




module.exports = router