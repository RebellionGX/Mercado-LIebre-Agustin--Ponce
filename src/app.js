const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')) );

/* const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) ); */

app.listen(3030,() => {
    console.log('servidor corriendo en puerto 3030');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})