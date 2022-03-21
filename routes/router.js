const express = require('express');
const { allUsers, userById, createUser } = require('../controllers/userController');
// const { allCategories, createCategory } = require('../controllers/categoryController');
// const { allPosts, postById } = require('../controllers/postController');
const {
  displayNameValidation,
  emailValidation,
  passwordValidation,
} = require('../middlewares/validations');

const loginRouter = express.Router();
const userRouter = express.Router();
const categoriesRouter = express.Router();
const postRouter = express.Router();

loginRouter.post('/'); // Requisito 02

userRouter.get('/', allUsers); // Requisiro 03
userRouter.get('/:id', userById); // Requisito 04
userRouter.post('/', displayNameValidation, emailValidation, passwordValidation, createUser); // Requisito 01
userRouter.delete('/me'); // Requisito 12

// categoriesRouter.get('/', allCategories); // Requisito 06
// categoriesRouter.post('/', createCategory); // Requisito 05

// postRouter.get('/', allPosts); // Requisito 08
// postRouter.get('/:id', postById); // Requisito 09
postRouter.post('/'); // Requisito 07
postRouter.post('/:id'); // Requisito 10
postRouter.delete('/:id'); // Requisito 11
postRouter.get('/search?q=:searchTerm'); // Requisito 13

module.exports = {
  loginRouter,
  userRouter,
  categoriesRouter,
  postRouter,
};
