const express = require('express');
const path = require("path")  
const app = express();
const axios = require('axios')


// Utiliser EJS comme moteur de template
app.set('view engine', 'ejs')

// Inclure les fichiers Javascript
app.use('/client', express.static(__dirname + '/client'))

app.get("/", (req, res) => {
    axios.get('http://172.16.157.101:81/CCF/PHP/index.php')
        .then((response) => {
            res.send(response.data)
        })
        .catch((error) => {
            res.send(error)
        })

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

app.get("/distribution",(req,res)=>{
    res.render("pages/distribution")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})