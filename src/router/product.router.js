import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from '../controller/product.controller';

const app = Router();

app.get('/product', index);
app.post('/product', save);
app.get('/product/:productId', edit);
app.put('/category/:productId', update);
app.delete('/category/:productId', remove);

export default app;