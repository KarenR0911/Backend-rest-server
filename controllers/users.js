const { response, request} = require('express');


const usersGet= (req= request, res = response) => {

    const { q, nombre= 'No name', apikey}= req.query;


    res.json({
        ok: true,
        msg: 'API controlador ',
        q,
        nombre,
        apikey
    });
}

const usersPost= (req, res= response) => {
    const { nombre, edad}= req.body;
    
    res.json({
        msg: 'post controlador B) ',
        nombre, edad
    });
}

const usersPut= (req, res = response) => {

    const {id}= req.params;

    res.json({
        ok: true,
        msg: 'put controlador ',
        id
        
    });
}

const usersDelete= (req, res= response) => {
    res.json({
        ok: true,
        msg: 'delete controlador :3 '
    });
}

const usersPatch=  (req, res= response) => {
    res.json({
        ok: true,
        msg: 'patch controlador'
    });
}

module.exports= {
    usersGet, usersPut, usersPost, usersDelete, usersPatch
}