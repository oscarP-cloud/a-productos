import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import  * as helmet from "helmet";
import  productoRoute  from './routes/producto.route';
// import {  } from 'cors';
    
const PORT = process.env.PORT || 3000;
const APP = express();

APP.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// ejecucion conexion BDs
    createConnection();
    // Middelware
    // APP.use(cors())
    APP.use(helmet());
    APP.use(express.json());
    APP.use(express.urlencoded({ extended: false }))

    // routes
    APP.use(productoRoute);

    APP.listen(PORT, () => {
        console.log(`Se inicio el servicio en el localhost:${PORT}`);
    })

