const express = require('express');
const app = express();
const path = require('path')

const rutaPublic=path.resolve(__dirname,'./public');

 app.use(express.static(rutaPublic));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/cuenta', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})


app.listen(3030, ()=> console.log('Funciona server'));