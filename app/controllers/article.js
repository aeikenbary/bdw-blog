// ARTICLE CONTROLLER


var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  posts = require('../../config/posts');

module.exports = function (app) {
  app.use('/article', router);
};

router.get('/', function (req, res, next) {

// find all the articles in the database
  Article.find({}, function (err, articles){

    res.render('article/list', {
      title: 'Medium Articles',
      articles: articles  //corban has article: articles
    });

   });

});


// GET - show article 
router.get('/:id', function (req, res, next){

    var id = req.params.id;

    // find all articles in the mongo DB - Q for Corban = does this find all or 1?
    Article.findOne({_id:id}, function (err, article){

      res.render('article/show', {
        title:'BDW Blog',
        article: article
      });
   
    });

});

// GET - edit form
router.get('/:id/edit', function(req, res, next){

    var id = req.params.id;

    //find all the articles in the mongo DB
    Article.findOne({_id: id}, function(err, article){

      res.render('article/edit', {
      title: 'BDW Blog - EditThem',
      article: article
    });

  });

});

// POST - edit submission 
router.post('/:id', function (req, res, next){

  var id = req.params.id;
  console.log(req.body);

   Article.findOneAndUpdate({ _id: id }, req.body, function(err, article){
    console.log(article);
    if(err) return next(err)
    res.redirect('back');

  });

});



// info hitting localhost:3000/article/boostrap
// will push all articles to mongo lab
//router.get('/bootstrap', function (req, res, next) {

//    Article.create (posts.posts, function(err, articles){

//      if(err) return next (err);
//      res.send (articles);

//  });

// });





//    console.log('posts: ', posts);


//Examples
// localhost:3000/article/
// localhost:3000/article/1/edit
// localhost:3000/article/1/update
// localhost:3000/article/1/create
// localhost:3000/article/1
// localhost:3000/article/list/