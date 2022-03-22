const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: sequelize.fn('now') },
    updated: { type: sequelize.fn('now') },
  }, {
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return blogPost;
};

module.exports = BlogPost;
