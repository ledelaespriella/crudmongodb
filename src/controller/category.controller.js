import CategoryModel from './../model/category.model';
import LotModel from './../model/lot.model';

const index = async (req, res) => {
  try {
    const data = await CategoryModel.find({});
    return res.json({ status: true, items: data });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

const indexLot = async (req, res) => {
  try {
    const data = await LotModel.find({});
    return res.json({ status: true, items: data });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
}

const save = async (req, res) => {
  try {
    const data = req.body;
    const model = new CategoryModel(data);
    await model.save();
    return res.json({ status: true });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

const edit = async (req, res) => {
  try {
    const params = req.params;
    const category = await CategoryModel.findById(params.categoryId);
    return res.json({ status: true, data: category });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await CategoryModel.findByIdAndUpdate(params.categoryId, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await CategoryModel.findByIdAndDelete(params.categoryId);
    return res.json({ status: true });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

export { index, save, edit, update, remove, indexLot };
