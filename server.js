const express = require('express');
const app = express();
const port = 3400;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/',(request,response)=>{
	response.send('Working');
})

// Controllers
const PokedexController = require('./controllers/pokedexController');
app.use('/pokemon/',PokedexController);

app.listen(port,()=>{
	console.log('listening at port 3400');
});