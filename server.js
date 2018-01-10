const express    = require('express'),
      app        = express(),
      port 		 = 3000,
	  bodyParser = require('body-parser'),
	  methodOverride = require('method-override'); /// for delete and possibly put (edit)


// FOR DELETE
app.use(methodOverride('_method'))
// FOR CSS
app.use(express.static('public'));

const pokeControler = require('./controllers/pokeController.js')// get the controller functions and require them
app.use('/pokemon/', pokeControler);//all paths will start with /fruits/


// //////////////// INDEX ////////////////
// app.get('/pokemon/', (req, res) => {
// 	res.render('index.ejs', { data: Pokemon });
// 	// res.send("GET ROUTE HIT")
// });


//////////////// SHOW ////////////////
// app.get('/pokemon/:id', (req, res) => {
//     res.render('show.ejs', { 
//     	data: Pokemon[req.params.id] 
//     });
//     // res.send("you tried to go to /" + req.params.id)
// });


// /////////////// EDIT ////////////////
// router.get('/pokemon/:id/edit', (req, res) => {
//   res.render('edit.ejs', {
//     data: Pokemon[req.params.id], 
//     index: req.params.id 

//   })
//   console.log("hey the edit route was hit;")

// })

// router.put('pokemon/:index', (req, res) => {

//   console.log("hey update route was hit;")

//   Pokemon[req.params.index] = {
//     name: req.body.name,
//   }

//   res.redirect('/');
// })





/////////////// SERVER LISTINER ///////////////
app.listen(port, () => {
  console.log("Listening on port 3000...asdfsadfasdf...")
});

