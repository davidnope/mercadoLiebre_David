const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/user.json');
const user = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const controller = {
    register: (req, res) => {
        res.render('register')
    },
    saveRegister: (req, res) => {
        
        let userNew = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            fecha: req.body.fecha,
            direccion: req.body.direccion,
            perfilUsuario: req.body.perfilUsuario,
            categorias: req.body.categorias,
            contrañesa: req.body.contraseña,
        };

        console.log(userNew);

        res.send('guarde')

    },
    login: (req, res) => {
        res.render('login')
    }
}


module.exports = controller;