const express = require('express');
const router = express.Router();
const pokeBase = require('../models/pokemon.js');

router.route('/')
	.get((request,response)=>{
		res.render('index.ejs',{pokemon: pokeBase});
	})

module.exports = router;