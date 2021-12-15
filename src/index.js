import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { save } from './../src/controller/category.controller';


dotenv.config();
const app = express();
//se crea una funcion asyncrona
const main = async () => {
    //conexion a la base de datos
    await mongoose.connect(process.env.URL_DB)
        .then(() => { console.log('app connect to db') });

    //se parsea todo lo que llega en formato json
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hola mundo');
    });

    app.post('/category', save);

    app.listen(process.env.PORT, () => {
        console.log(`app listening at port ${process.env.PORT}`)
    });

};

main().catch(err => console.log(err));






