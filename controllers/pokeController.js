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
	console.log('hitting delete')
  const idx = req.params.id;
  Pokemon.splice(idx, 1)
  res.redirect('/pokemon')
})



////////////// SHOW ////////////////
router.get('/:id', (req, res) => {
	data: Pokemon[req.params.id] 
	console.log('get route')
    res.render('show.ejs', { 
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




/////////////// CREATE NEW ////////////////

router.get('/new', (req, res)=>{
	res.render('new.ejs');
	console.log("create new was hit;")
	// const idx = req.params.index;
 //  	Pokemon.splice(0, 1, idx)
})




/////////////// WORKS FOR EDIT AND CREATE??? ////////////////


router.put('/:id', (req, res) => {
  Pokemon[req.params.id] = {
    name: req.body.name,
  }
  console.log("hey put route was hit;")
  res.redirect('/pokemon');
})




/////////////// EXPORT ////////////////

module.exports = router;








