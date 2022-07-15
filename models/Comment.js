//import sequelize
const { Model, DataTypes } = require('sequelize');
//import connections
const sequelize = require('../config/connection');

//new class
class Comment extends Model {}

//model body
Comment.init(
  {
    // columns will go here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

//exporting to be used
module.exports = Comment;