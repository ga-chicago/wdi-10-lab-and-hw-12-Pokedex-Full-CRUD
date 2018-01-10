const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon.js');

// ROUTES

// INDEX
router.get('/', (req, res) => {
	console.log('hit the get route for index')
	res.render('index.ejs', { 
		data: pokemon 
	});
});

// NEW
router.get('/new', (req, res) => {
	console.log('hit the new route')
	res.render('new.ejs')
})

// SHOW
router.get('/:id', (req, res) => {
    console.log('hit the show route for this pokemon')
    res.render('show.ejs', { 
    	data: pokemon[req.params.id] 
    });
});



module.exports = router;