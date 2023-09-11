const {response} = require('express')

//Importación de los modelos
const abonos = require('../models/Abonos')

//Método GET de la API
const AbonosGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los usuarios
    const Abonos = await abonos.find()

    res.json({  //Respuesta en JSON
        Abonos
    })   
}

//Método POST de la api
const AbonosPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.query //Captura de atributos
    try {
        const Abonos = new abonos(body) //Instanciando el objeto
        await Abonos.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Modificación
const AbonosPut = async (req, res) => {
    const { _id, valor, fecha } = req.query
    let mensaje = 'Modificación exitosa'
    try {
        await abonos.updateMany({ _id: _id }, { $set: { valor: valor, fecha: fecha }});
} catch (error) {
    mensaje = "Problemas al modificar"
    console.log(error)
}
res.json({
    msg: mensaje
})
}

 //DELETE - ELIMINAR
const AbonosDelete = async (req, res = response) => {
    const { _id } = req.query
    let mensaje = 'Eliminación exitosa'
    try {
        const Abonos = await abonos.deletOne({ _id: _id })
    } catch (error) {
        mensaje = "Problemas al eliminar"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}


module.exports = {
    AbonosGet,
    AbonosPost,
    AbonosPut,
    AbonosDelete
}