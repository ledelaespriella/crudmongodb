import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import CategoryRouter from './router/cantegory.router';
import ProductRouter from './router/product.router';
import UserRouter from './router/user.router';

dotenv.config();
const app = express();
//se crea una funcion asyncrona
const main = async () => {
    //conexion a la base de datos
    await mongoose.connect(process.env.URL_DB)
        .then(() => { console.log('app connect to db') });

    //se parsea todo lo que llega en formato json
    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.send('Hola mundo');
    });

    // usa esta lista de rutas
    app.use('/api', CategoryRouter);
    app.use('/api', ProductRouter);
    app.use('/api', UserRouter);

    app.listen(process.env.PORT, () => {
        console.log(`app listening at port ${process.env.PORT}`)
    });

};

main().catch(err => console.log(err));






