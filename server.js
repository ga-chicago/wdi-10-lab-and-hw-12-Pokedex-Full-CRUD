const express    = require('express'),
      app        = express(),
      port 		 = 3000,
	  bodyParser = require('body-parser'),
	  methodOverride = require('method-override'); /// for delete and possibly put (edit)


// always read req.body
app.use(bodyParser.urlencoded({
  extended: true
}));

/////////////// FOR DELETE ///////////////
app.use(methodOverride('_method'))
/////////////// FOR CSS ///////////////
app.use(express.static('public'));

const pokeControler = require('./controllers/pokeController.js')// get the controller functions and require them
app.use('/pokemon/', pokeControler);//all paths will start with /pokemon/




/////////////// SERVER LISTINER ///////////////
app.listen(port, () => {
  console.log("Listening on port 3000...asdfsadfasdf...")
});

