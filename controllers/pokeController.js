const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon.js');






//////////////// INDEX ////////////////
router.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
	// res.send("GET ROUTE HIT")
});



////////////// SHOW ////////////////
router.get('/:id', (req, res) => {
    res.render('show.ejs', { 
    	data: Pokemon[req.params.id] 
    });
    // res.send("you tried to go to /" + req.params.id)
});







module.exports = router;