import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
  nombre: String, // String is shorthand for {type: String}
  state: { type: Boolean, default: true }, //
});

export default model('Category', CategorySchema);
