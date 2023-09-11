const {Schema, model} = require('mongoose')

const abonoSchema = Schema({
        valor: String,
        fecha: Date
})

//Exportar la función UsuarioSchema
module.exports = model('abonos',abonoSchema)

