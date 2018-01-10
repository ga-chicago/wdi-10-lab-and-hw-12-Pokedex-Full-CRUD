const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// MIDDLEWARE
// hook up body parser
app.use(bodyParser.urlencoded({
	extended: false
}));
// hook up method override 
app.use(methodOverride('_method'));
// hook up static (so can have css)
app.use(express.static('public'));
// require the controller for the pokemon and place it at the root route of pokemon
const pokemonController = require('./controllers/pokemonController')
app.use('/pokemon/', pokemonController)

// Redirecting to Pokemon homepage
app.get('/', (req, res) => {
	res.redirect('/pokemon')
})


// LISTENER
app.listen(3000, () => {
	console.log('Listening on port 3000')
})