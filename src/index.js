import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res)=>{
    res.send('Hola mundo');
});

app.listen( process.env.PORT , () => {
    console.log(`app listening at port ${process.env.PORT}`)
});


