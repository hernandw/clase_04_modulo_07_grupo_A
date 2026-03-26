import Users from "../models/usersModel.js";


//obtener los usuarios

export const getAllUsers = async(req, res)=>{
    try {
        const users = await Users.findAll({raw: true})
        res.render('home',{
            users
        })
        
    } catch (error) {
        console.error('Error al obtener estudiantes:', error);
      res.status(500).send('Error interno del servidor');
    }
}

export const createUser = async(req, res)=>{
    try {
        const {name, email} = req.body
        await Users.create({name, email})
        res.redirect('/')
    } catch (error) {
        console.error('Error al crear estudiante:', error);
      res.status(500).send('Hubo un error al guardar los datos');
    }
}