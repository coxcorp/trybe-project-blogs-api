const express = require('express');

const loginRouter = express.Router();
const userRouter = express.Router();
const categoriesRouter = express.Router();
const postRouter = express.Router();

loginRouter.post('/'); // Requisito 02

userRouter.get('/'); // Requisiro 03
userRouter.get('/:id'); // Requisito 04
userRouter.post('/'); // Requisito 01
userRouter.delete('/me'); // Requisito 12

categoriesRouter.get('/'); // Requisito 06
categoriesRouter.post('/'); // Requisito 05

postRouter.get('/'); // Requisito 08
postRouter.get('/:id'); // Requisito 09
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
