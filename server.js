const express = require('express');
const mqtt = require('mqtt')
const bodyParser = require("body-parser");

const app = express();
const client = mqtt.connect('mqtt://172.16.200.2')

// Utiliser EJS comme moteur de template
app.set('view engine', 'ejs')

// Inclure les fichiers Javascript
app.use('/client', express.static(__dirname + '/client'))

// inclure body parser
app.use(express.json());

// Configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

client.on("connect", () => {
    console.log("User Connected")
})

app.route("/")
    .get((req, res) => {
        res.render("pages/index")
    })

app.route("/distribution")
    .get((req, res) => {
        res.render("pages/distribution")
    })
    .post((req, res) => {
        const id = req.body.id
        console.log(id)
        client.publish('mqttPaul', id)
    })

app.route("/meteo")
    .get((req, res) => {
        res.send("Meteop")
    })

app.route("/editeur")
    .get((req, res) => {
        res.render("pages/editeur")
    })

app.listen(3000, () => {
    console.log("Server started on port 3000")
})