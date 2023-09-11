const express = require('express')// Framework de node
const cookieParser = require('cookie-parser');//Para variables en el navegador
const cors  = require('cors');//Implementar seguridad
const bodyParser = require('body-parser')//Recibir datos de formularios html
const { dbConnection } = require('../database/config')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT //Capturando variable puerto
        this.AbonosPath = '/api/Abonos' //Ruta pública
        this.conectarDB()
        this.routes()
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.use(this.AbonosPath, require('../routes/Abonos'))
    }
    

    async conectarDB(){
        await dbConnection() //Esperar la respuesta del servidor        
    }
}

module.exports =  Server