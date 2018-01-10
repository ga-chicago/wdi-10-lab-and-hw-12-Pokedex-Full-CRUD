const express = require("express");
const router = express.Router();
const pokemon = require("../models/pokemon.js");



// Index Route
router.get("/", (req, res) => {
	// res.send(pokemon);
	// console.log("Hit the index route");

	res.render("index.ejs", {
		pokemon: pokemon
	})
});


// character route
router.get("/:index", (req, res) => {
	res.send(pokemon[req.params.index])
	console.log("Hit the char route")
})



module.exports = router