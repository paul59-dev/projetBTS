const express = require('express');
const app = express();

// Utiliser EJS comme moteur de template
app.set('view engine', 'ejs')

// Inclure les fichiers Javascript
app.use('/client', express.static(__dirname + '/client'))

// inclure body parser
app.use(express.json());

app.route("/")
    .get((req, res) => {
        res.render("pages/index")
    })

app.route("/distribution")
    .get((req, res) => {
        res.render("pages/distribution")
    })

app.listen(3000, () => {
    console.log("Server started on port 3000")
})