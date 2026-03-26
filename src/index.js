import express from "express";
import userRouter from "./routes/usersRoutes.js";
import exphbs from "express-handlebars";
import path from "path";
import db from "./config/db.js";


const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3005;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static Files
app.use(express.static(path.join(__dirname, "src/public")));

//Sincronizar la BASE de DATOS
const connectDB = async () => {
  try {
    await db.sync();
    console.log("DB Conectada");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

//configuración de Handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "src/views/layouts"),
    extname: ".hbs",
  }),
);

//rutas

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor Activo en el puerto http://localhost:${PORT}`);
});
