//importing User.js
const User = require('./User');
//importing Post.js
const Post = require('./Post');
//importing Vote.js
const Vote = require('./Vote');
//importing Comment.js
const Comment = require('./Comment');


//define one-to-many relationship (one user can have many notes, but never one note belong to many users)
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

//Associate User and Post to one another
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });

  Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

  //add comment relations
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });

module.exports = { User, Post, Vote, Comment };
