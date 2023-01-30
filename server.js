const express = require('express');
const path = require("path")  
const app = express();

// Utiliser EJS comme moteur de template
app.set('view engine', 'ejs')

// Inclure les fichiers Javascript
app.use('/client', express.static(__dirname + '/client'))

app.get("/", (req, res) => {
    res.render('pages/index')
})

// Ephemeride
app.get("/ephemeride", (req, res) => {
    res.render('pages/ephemeride')
})

// Meteo
app.get("/meteo", (req, res) => {
    res.send("Meteo")
})

// Menu Cantine
app.get("/cantine", (req, res) => {
    res.send("Menu de la cantine")
})

// Page recuperation addresse mac
app.get("/rasberry/:macaddress", (req, res) => {
    res.send(macaddress);
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})