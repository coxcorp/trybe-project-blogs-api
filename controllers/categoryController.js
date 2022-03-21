const { Category } = require('../models');

const allCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({ name });

    return res.status(201).json(newCategory);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  allCategories,
  createCategory,
};
