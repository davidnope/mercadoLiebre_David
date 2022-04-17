const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;

// RUTAS requeridas
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');
const userRouter = require('./routers/userRouter');

// CARPETA PUBLICA
const rutaPublic=path.join(__dirname,'../public');
app.use(express.static(rutaPublic));

// EJS
app.set('view engine', 'ejs');
app.set('views', './src/views')

// RUTAS 
app.use('/', mainRouter);

app.use('/products', productsRouter);

app.use('/user', userRouter);

app.listen(PORT, ()=> console.log('Funciona server'));