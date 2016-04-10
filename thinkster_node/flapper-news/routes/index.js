var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// GET LIST OF ALL POSTS
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});

// ADD A NEW POST
router.post('/posts', function(req, res, next) {
  var post = new Post(req.body);

  post.save(function(err, post){
    if(err){ return next(err); }

    res.json(post);
  });
});

// QUERY DATABASE SPECIFIC POST - MIDDLEWARE PARAM
router.param('post', function(req, res, next, id) {
	var query = Post.findById(id);

	query.exec(function (err, post){
		if (err) { return next(err); }
		if (!post) { return next(new Error('can\'t find post')); }

		req.post = post;
		return next();
	});
});

// GET POSTS BY ID
router.get('/posts/:post', function(req, res) {
	req.post.populate('comments', function(err, post) {
		if (err) { return next(err); }

		res.json(post);
	});
});

// ADD AN UPVOTE
router.put('/posts/:post/upvote', function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { return next(err); }

    res.json(post);
  });
});


// ========================================================================================================
// ========================================================================================================

// POST COMMENTS
router.post('/posts/:post/comments', function(req, res, next) {
	var comment = new Comment(req.body);
	comment.post = req.post;

	comment.save(function(err, comment){
	if(err){ return next(err); }

	req.post.comments.push(comment);
	req.post.save(function(err, post) {
	  if(err){ return next(err); }

	  res.json(comment);
	});
	});
});

router.get('/comments', function(req, res, next) {
  Comment.find(function(err, comments){
    if(err){ return next(err); }

    res.json(comments);
  });
});

// QUERY DATABASE SPECIFIC COMMENT - MIDDLEWARE PARAM
router.param('comment', function(req, res, next, id) {
	var query = Comment.findById(id);

	query.exec(function (err, comment){
		if (err) { return next(err); }
		if (!comment) { return next(new Error('can\'t find the comment')); }

		req.comment = comment;
		return next();
	});
});

// GET POSTS BY ID
router.get('/posts/:post/comments/:comment', function(req, res) {
  res.json(req.comment);
});

// ADD AN UPVOTE
router.put('/posts/:post/comments/:comment/upvote', function(req, res, next) {
  req.comment.upvote(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});


