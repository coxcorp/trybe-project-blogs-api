const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');
// Requisito 03
const allUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};
// Requisito 04
const userById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};
// Requisito 01
const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const isUnique = await User.findOne({ where: { email } });
    if (isUnique) return res.status(409).json({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });

    const token = jwtGenerator({ id: newUser.id, email });

    return res.status(201).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  allUsers,
  userById,
  createUser,
};
