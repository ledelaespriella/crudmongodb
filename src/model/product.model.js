import { Schema, model, ObjectId } from 'mongoose';

const ProductSchema = new Schema({
  nombre: String, // String is shorthand for {type: String}
  category_id: { type: ObjectId, ref: 'Category' }, // String is shorthand for {type: String}
  size: {
    widht: Number,
    height: Number,
  },
  state: { type: Boolean, default: true },
  colors: Array,
  featurs: [
    {
      name: String,
      description: String,
      lot_id: { type: ObjectId, ref: 'Lot' },
    },
  ],
});

export default model('Product', ProductSchema);
