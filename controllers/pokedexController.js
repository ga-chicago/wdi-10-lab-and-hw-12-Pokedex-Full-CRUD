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
	})
	.put((request,response)=>{
		let types = request.body.type.split(',')
		let stats = {hp: request.body.hp, attack: request.body.attack, defense: request.body.defense}
		request.body.type = types;
		request.body.stats = stats;
		pokeBase.push(request.body);
		response.redirect('/pokemon/');
	})

router.route('/:index') // Show the chosen pokemon 
	.get((request,response)=>{
		response.render('show.ejs',{pokemon: pokeBase[request.params.index],index: request.params.index,});
	})
	.put((request,response)=>{
		let types = request.body.type.split(',')
		pokeBase[request.params.index].type = types;
		pokeBase[request.params.index].name = request.body.name;
		pokeBase[request.params.index].img = request.body.img;
		pokeBase[request.params.index].stats.hp = request.body.hp;
		pokeBase[request.params.index].stats.attack = request.body.attack;
		pokeBase[request.params.index].stats.defense = request.body.defense;
		response.redirect('/pokemon');
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