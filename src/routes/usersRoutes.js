import express from 'express'
import {  about, contact} from '../controllers/appController.js'
import {getAllUsers, createUser} from '../controllers/userController.js'


const router = express.Router()

 router.get('/', getAllUsers) 

router.get('/about', about)

router.get('/contact', contact)

router.post('/add-user',  createUser)





export default router