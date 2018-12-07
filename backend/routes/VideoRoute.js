const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admin:admin1234@ds143892.mlab.com:43892/videostore';


//Getting all the lists
router.get('/video', function (req, res) {
  console.log('/video requested!')
  MongoClient.connect(url ,{ useNewUrlParser: true }, function (err, client) {
    if (err) throw err
    var db = client.db('videostore')

    db.collection('videolisting').find().toArray(function (err, videoList) {
      if (err) throw err

      res.status(200).json({ videoList });
    })
  })
});

//Getting a single information
router.get('/video/:id', function (req, res) {
  console.log('/video id requested! - get')

  MongoClient.connect(url ,{ useNewUrlParser: true }, function (err, client) {
    if (err) throw err
    var db = client.db('videostore')
    var ObjectId = require('mongodb').ObjectId


    db.collection('videolisting').findOne({"_id": ObjectId(req.params.id)}, function(err, object) {
      if (err) throw err

      res.status(200).json({ object });
    })
  })
});


// Inserting a new video
router.put('/video', function (req, res) {
  console.log('/video requested! - PUT :D')

  var title = req.body.title;
  var runningTime = req.body.runningTime;
  var genre = req.body.genre;
  var rating = req.body.rating;
  var director = req.body.director;
  var status = req.body.status;

  myJsonReq={ 
    title: title,
    runningTime: runningTime ,
    genre: genre ,
    rating: rating ,
    director: director ,
    status: status
  }

  MongoClient.connect(url,{ useNewUrlParser: true }, function (err, client) {
    if (err) throw err

    var db = client.db('videostore')
    db.collection('videolisting').insertOne(myJsonReq, function (err, object) {
      if (err) throw err
      if (object.result.n > 0) {
        res.status(200).json({ result: 'Successfully added' });
      } else {
        res.status(204).json({ result: 'Could not add' });
 
      }
    });

  })
});

//Deleting video
router.delete('/video/:id', function (req, res) { 
  console.log('/video id requested! - delete')
 MongoClient.connect(url,{ useNewUrlParser: true }, function (err, client) {
    if (err) throw err
    var db = client.db('videostore')
    var ObjectId = require('mongodb').ObjectId
    
    db.collection('videolisting').deleteOne({"_id": ObjectId(req.params.id)}, function (err, object) {
        if (err) {
        res.send(err);
      }
      res.status(200).json({ object });

    })
  })
})

//Updating a video information
router.put('/video/:id', function (req, res) {
  console.log('/video updating requested! - PUT :D')

  var title = req.body.title;
  var runningTime = req.body.runningTime;
  var genre = req.body.genre;
  var rating = req.body.rating;
  var director = req.body.director;
  var status = req.body.status;

  myJsonReq={ 
    title: title,
    runningTime: runningTime ,
    genre: genre ,
    rating: rating ,
    director: director ,
    status: status
  }

  MongoClient.connect(url,{ useNewUrlParser: true }, function (err, client) {
    if (err) throw err

    var db = client.db('videostore')
    db.collection('videolisting').updateOne(myJsonReq, function (err, object) {
      if (err) throw err
      if (object.result.n > 0) {
        res.status(200).json({ result: 'Successfully updated' });
      } else {
        res.status(204).json({ result: 'Could not update' });
 
      }
    });

  })
});





router.get('/', function (req, res) {
  
  console.log('below is what you requested in the BODY - btw GET does not need the body. Why? you do not need to provide any info to get a list of the collection.')
  console.log(req.body)

  console.log('/ requested!')

  res.json({'check':'Health Check, yay!'});
})

module.exports = router;