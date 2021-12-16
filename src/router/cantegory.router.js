import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from '../controller/category.controller';

const app = Router();

app.get('/category', index);
app.post('/category', save);
app.get('/category/:categoryId', edit);
app.put('/category/:categoryId', update);
app.delete('/category/:categoryId', remove);

export default app;