const express = require("express");
const app = express();
const port = 3000








const pokemonController = require("./controllers/pokemonController");
app.use("/pokemon/", pokemonController);


app.get('/', (req, res) => {
	res.redirect("/pokemon");
});






app.listen(port, () => {
	console.log("Listening on port 3000");
});