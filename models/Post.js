//import elements will need to buld the Post model
//model and DataType from the sequelize package
const { Model, DataTypes } = require('sequelize');
//connection to MySQL that's stored in the connections.js file
const sequelize = require('../config/connection');

//define/create the Post model (which extend from the Model)
class Post extends Model {
    static upvote(body, models) {

    return models.Vote.create({
        user_id: body.user_id,
        post_id: body.post_id
      }).then(() => {
        return Post.findOne({
          where: {
            id: body.post_id
          },
          attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            [
              sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
              'vote_count'
            ]
          ]
        });
      });
    }
}

//define/create columns in the Post, configure naming conventions and pass connection instance to initialize Post model
Post.init(
    {
        //Id id the PRIMARY KEY for reference and auto increment
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        //making sure it's a valid URL
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        //reference property to stablish the relationship between posts and users 
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;