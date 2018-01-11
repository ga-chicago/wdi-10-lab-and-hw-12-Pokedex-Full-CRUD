const express = require('express');
const router = express.Router();
const pokeBase = require('../models/pokemon.js');

router.route('/') //  Create the pokedex landing page
	.get((request,response)=>{
		response.render('index.ejs',{pokemon: pokeBase});
	})

router.route('/new') // Create a new pokemon in the pokedex
	.get((request,response)=>{
		response.render('new.ejs');
		response.redirect('/pokemon/');
	})

router.route('/:index') // Show the chosen pokemon 
	.get((request,response)=>{
		response.render('show.ejs',{pokemon: pokeBase[request.params.index],index: request.params.index,});
	})
	.delete((request,response)=>{
		pokeBase.splice(request.params.index,1);
		response.redirect('/pokemon/');
	})

router.route('/:index/edit') // Shows user a form to edit the chosen pokemon
	.get((request,response)=>{
		response.render('edit.ejs',{
			index: request.params.index,
			pokemon: pokeBase[request.params.index]
		});
	})

module.exports = router;