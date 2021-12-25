import { Router } from 'express';
import {
  index,
  indexLot,
  save,
  edit,
  update,
  remove,
} from '../controller/category.controller';

import { authMiddleware } from './../middleware/auth.middleware';

const app = Router();

app.get('/category', authMiddleware, index);
app.get('/lot',authMiddleware, indexLot)
app.post('/category', authMiddleware, save);
app.get('/category/:categoryId', authMiddleware, edit);
app.put('/category/:categoryId', authMiddleware, update);
app.delete('/category/:categoryId', authMiddleware, remove);

export default app;
