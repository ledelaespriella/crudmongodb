import CategoryModel from './../model/category.model';

const index = (req, res) => {

};

const save = async (req, res) => {

    try {
        const data = req.body;
        const model = new CategoryModel(data);
        await model.save();
        console.log('guardo');
        return res.json({ status: true });


    } catch (err) {
        return res.json({ status: false, errors: err.message });
    }

};

const edit = (req, res) => {

};

const update = (req, res) => {

};

const remove = (req, res) => { };

export { index, save, edit, update, remove };