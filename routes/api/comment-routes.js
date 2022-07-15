//requesting express feature Router
const router = require('express').Router();
//requesting access to Coment inside models
const { Comment } = require('../../models');

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {

});

module.exports = router;