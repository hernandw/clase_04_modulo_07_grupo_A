import express from 'express'
import userRouter from './routes/usersRoutes.js'
import exphbs from 'express-handlebars'
import path from 'path'

const __dirname = path.resolve()

const app = express()

const PORT = process.env.PORT || 3005

//Middlewares

//Static Files

//Sincronizar la BASE de DATOS

//configuración de Handlebars
app.set("view engine", 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    extname: '.hbs'

}))


//rutas

app.use('/', userRouter)

app.listen(PORT, ()=>{
    console.log(`🚀 Servidor Activo en el puerto http://localhost:${PORT}`);
})