const { Category } = require('../models');
// Requisito 06
const allCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};
// Requisito 05
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
