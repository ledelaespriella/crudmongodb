import { Router } from 'express';
import {
  index,
  save,
  edit,
  update,
  remove,
} from '../controller/category.controller';

import { authMiddleware } from './../middleware/auth.middleware';

const app = Router();

app.get('/category', authMiddleware, index);
app.post('/category', authMiddleware, save);
app.get('/category/:categoryId', authMiddleware, edit);
app.put('/category/:categoryId', authMiddleware, update);
app.delete('/category/:categoryId', authMiddleware, remove);

export default app;
