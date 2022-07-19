//importing modules
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


//setting up the main homepage route:
const router = require('express').Router();

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        console.log(dbPostData[0]);

        const posts = dbPostData.map(post => post.get({ plain: true }));
        //res.render will render the result | 'homepage' is reffering to? | {posts} refer to all posts
        res.render('homepage', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
      
    res.render('login');
  });

  router.get('/', (req, res) => {
    console.log(req.session);
  
    // other logic...
  });

module.exports = router;