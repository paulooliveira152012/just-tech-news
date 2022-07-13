const User = require('./User');
const Post = require('./Post')


//define one-to-many relationship (one user can have many notes, but never one note belong to many users)
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });



module.exports = { User, Post };
