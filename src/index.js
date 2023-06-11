import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
// import expressLayouts from "express-ejs-layouts";
import winston from "winston";
import setRoutes from "./routes/index.route.js";

// import {port, url} from "./app/configs/index.js";

import {initDatabase, initLogging, initValidations, config} from "./configs/index.js";


const app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// console.log(__dirname)
// app.use(expressLayouts)
const viewsPath = path.join(__dirname, 'views');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(cors)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

setRoutes(app);

app.listen(config.port, () => {
    winston.info(`Server started on URL ${config.url + config.port}`);
})