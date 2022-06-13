const express = require('express');
const path = require('path');

const app = express();

//MIDDLEWARE
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.set('puerto', process.env.PORT || 3001);

// **** RUTASS ****
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

// app.listen(3000, () => {
//     console.log("Sevidor corriendo en puerto 3000");
// });

app.listen(app.get('puerto'), () => {
    console.log(`Servidor corriendo de manera satisfactoria ${app.get('puerto')}`);
});