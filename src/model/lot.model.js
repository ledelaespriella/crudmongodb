import { Schema, model } from 'mongoose';

const LotSchema = new Schema({
    nombre: String, // String is shorthand for {type: String}
    state: { type: Boolean, default: true },
    date: Date, //
});

export default model('Lot', LotSchema);