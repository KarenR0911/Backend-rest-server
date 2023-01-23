const express= require('express');
const cors= require('cors');
const { Router } = require('express');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pathusers= '/api/users';

        //middlewares
        this.middlewares();
//rutas de la aplicacion
        this.routes();

    }

    middlewares(){

        this.app.use(cors());

        //lectura y parseo del body
        this.app.use( express.json());
        
        this.app.use(express.static('public'));





    }

    routes() {
        
        this.app.use(this.pathusers, require('../routes/user'));

    }

    listen() {
        
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;
