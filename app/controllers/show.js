//the one i am adding to show the entire blog post


var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  posts = require('../../config/posts');

module.exports = function (app) {
  app.use('/article', router);
};



router.get('/', function (req, res, next) {

 //   console.log('posts: ', posts);

    res.render('article/list', {
      title: 'article.title',
      articles: posts
    });

});
