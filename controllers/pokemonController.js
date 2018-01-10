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


// Create New Route
router.get("/new", (req, res) => {
	console.log("Hit the ceate new route");
	res.send("Create new poke")
})


// character route
router.get("/:index", (req, res) => {
	// res.send(pokemon[req.params.index])
	// console.log("Hit the char route")

	res.render("show.ejs", {
		pokemon: pokemon[req.params.index]
	})
})



module.exports = router