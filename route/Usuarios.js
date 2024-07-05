import { Router } from "express";
import {readFile} from 'fs/promises'

const router = Router()

const fileUsers = await readFile ('./data/Usuario.json')
const userData = JSON.parse(fileUsers)

router.post ('/login', (req, res) =>{
    const email = req.body.email
    const contraseña = req.body.contraseña

    const result = userData.find (e=> e.email === email && e.comtraseña === contraseña)

    if(result){
        const data = {
            nombre: result.nombre,
            apellido: result.apellido,
            status: true
        }
        res.status(200).json(data)
    }else{
        res.status(400).json({status:false})
    }
})
export default router