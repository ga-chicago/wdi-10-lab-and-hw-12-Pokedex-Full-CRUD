
const express    = require('express');
const app        = express();
const Pokemon    = require('./models/pokemon.js');

const bodyParser = require('body-parser');

let methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'))

app.use(express.static('public'))

// INDEX
app.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
	// res.send(Pokemon);
});

// SHOW
app.get('/:id', (req, res) => {
	console.log('hit it');
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// NEW
app.get('/new', (req, res) => {
	res.render('new.ejs');
})



app.listen(3000, () => {
	console.log('listening on port 3000');
});