const PostCategory = (sequelize, _DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
  }, {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      { foreignKey: 'postId', otherKey: 'categoryId', through: postCategory, as: 'categories' });
    models.Category.belongsToMany(models.BlogPost,
      { foreignKey: 'categoryId', otherKey: 'postId', through: postCategory, as: 'blogPosts' });
  };
  return postCategory;
};

module.exports = PostCategory;
