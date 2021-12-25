import ProductModel from './../model/product.model';

const index = async (req, res) => {
  try {
    const data = await ProductModel.find({})
      .populate('category_id')
      .populate('featurs.lot_id');
    return res.json({ status: true, items: data });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new ProductModel(data);
    await model.save();
    return res.json({ status: true });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const category = await ProductModel.findById(params.productId)
      .populate('category_id')
      .populate('featurs.lot_id');
    return res.json({ status: true, item: category });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await ProductModel.findByIdAndUpdate(params.productId, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await ProductModel.findByIdAndDelete(params.productId);
    return res.json({ status: true });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

export { index, save, edit, update, remove };
