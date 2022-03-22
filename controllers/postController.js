const { BlogPost, User, Category } = require('../models');
// Requisito 08
const allPosts = async (req, res, next) => {
  try {
    const posts = await BlogPost.findAll({ 
      include: [
        { model: User, as: 'user' }, 
        { model: Category, as: 'categories' },
      ],
    });
    return res.status(200).json(posts);
  } catch (e) {
    next(e);
  }
};
// Requisito 09
const postById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await BlogPost.findOne({ where: { id }, 
      include: [
        { model: User, as: 'user' }, 
        { model: Category, as: 'categories' },
      ],
    });

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch (e) {
    next(e);
  }
};
// Requisito 07
const createPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const registeredCategories = await Category.findAll();
    const registeredCategoriesArray = registeredCategories.map(({ id }) => id);

    const allCategoriesIncludes = categoryIds.every((id) => registeredCategoriesArray.includes(id));

    if (!allCategoriesIncludes) return res.status(400).json({ message: '"categoryIds" not found' });

    const { id } = req.tokenData;
    const newPost = await BlogPost.create({ title, content, userId: id });

    return res.status(201).json(newPost);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  allPosts,
  postById,
  createPost,
};
