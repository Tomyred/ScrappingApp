import express, { json, urlencoded } from "express";
import cors from "cors";
import { engine } from 'express-handlebars';
import path from "path";
import router from "./routes";

const app = express();

const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "../views"));
app.engine(".hbs", engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, '../public')));

app.use(json());
app.use(cors());
app.use(urlencoded({extended: false}));
app.use(router);

app.listen({port}, () => {

    console.log(`Mustang Cloud Challenge - Server started at http://localhost:${port}`);
});