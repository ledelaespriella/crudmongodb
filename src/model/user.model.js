import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  nombre: { type: String, required: true }, // String is shorthand for {type: String}
  email: { type: String },
  password: { type: String },
  rol: { type: String, default: 'CLIENT' },
  state: { type: Boolean, default: false },
});

export default model('User', UserSchema);
