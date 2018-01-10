const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon.js');



//////////////// INDEX ////////////////
router.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
	// res.send("GET ROUTE HIT")
});


/////////////// DELETE ////////////////
router.delete('/:id', (req, res) => {
	console.log('hitting')
  const idx = req.params.id;
  Pokemon.splice(idx, 1)
  res.redirect('/pokemon')
})


////////////// SHOW ////////////////
router.get('/:id', (req, res) => {
	console.log('get route')
    res.render('show.ejs', { 
    	data: Pokemon[req.params.id] 
    });
    // res.send("you tried to go to /" + req.params.id)
});


/////////////// EDIT ////////////////
router.get('/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    data: Pokemon[req.params.id], 
    index: req.params.id 

  })
  // console.log("hey the edit route was hit;")

})

router.put('/:id', (req, res) => {

  console.log("hey update route was hit;")

  Pokemon[req.params.id] = {
    name: req.body.name,
  }

  res.redirect('/pokemon');
})


/////////////// EXPORT ////////////////

module.exports = router;








