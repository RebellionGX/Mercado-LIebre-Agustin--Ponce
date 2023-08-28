const express = require('express');
const path = require('path');

const app = express();

app.listen(3015,() => {
    console.log('servidor corriendo en puerto 3015');
});

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.use('/static', express.static(__dirname + '/public'));