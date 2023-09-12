
const router = require('express').Router();
let Post = require('../models/post.model');
Posts =[
  { 'id': 1, 'title': "Titre1", 'contenu': "content1" },
  { 'id': 2, 'title': "Titre2", 'contenu': "content2" },
  { 'id': 3, 'title': "Titre3", 'contenu': "content3" },
  { 'id': 4, 'title': "Titre4", 'contenu': "content4" },
];
router.get("/",(req, res) => {
    Post.find()
        .then(Posts => res.json(Posts))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.get("/:id",(req, res) => {
  Post.findById(req.params.id)
      .then(Posts => res.json(Posts))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/add",(req, res) => {
    const title = req.body.title;
    const contenu = req.body.title;
    const newPost = new Post({ title , contenu });

    newPost.save()
        .then(() => res.json('  Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete("/:id",(req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json('Post deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put("/:id",(req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.title = req.body.title;

            post.save()
                .then(() => res.json('post updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
