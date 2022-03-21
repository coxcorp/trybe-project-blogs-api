const { BlogPost, User, Category } = require('../models');

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

// const createUser = async (req, res, next) => {
//   try {
//     const { displayName, email, password, image } = req.body;
//     const newUser = await User.create({ displayName, email, password, image });

//     return res.status(201).json(newUser);
//   } catch (e) {
//     next(e);
//   }
// };

module.exports = {
  allPosts,
  postById,
  // createUser,
};
