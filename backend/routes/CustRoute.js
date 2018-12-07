const express = require('express');
const router = express.Router();

var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admin:admin1234@ds143892.mlab.com:43892/videostore';

router.get('/customer', function (req, res) {
  console.log('/customer requested! - GET :)')


  MongoClient.connect(url ,{ useNewUrlParser: true }, function (err, client) {
    // if any error, throw it
    if (err) throw err

    // set db with the db name, videostore
    var db = client.db('videostore')

    db.collection('custlisting').find().toArray(function (err, customerList) {
      if (err) throw err
      res.status(200).json({ customerList });
    })
  })
});

router.post('/customer', function (req, res) { //Create new customer information
  console.log('/customer requested! - POST :D')

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var address = req.body.address;
  var city = req.body.city;
  var phoneNumber = req.body.phoneNumber;
  var status = req.body.status;

  // This is also optional. JSON keys and vals bundled as myJsonReq
  myJsonReq={ 
    firstName: firstName ,
    lastName: lastName ,
    address: address ,
    city: city ,
    phoneNumber: phoneNumber ,
    status: status ,
  }

  MongoClient.connect(url,{ useNewUrlParser: true }, function (err, client) {
    if (err) throw err

    var db = client.db('videostore')

    // insertOne() - see the mongodb API :) so you know how to use it just like all other APIs
    // insert myJsonReq
    db.collection('custlisting').insertOne(myJsonReq, function (err, object) {
      if (err) throw err

      // console.log(object.insertedCount)
      // console.log(object.result.n )

      // try printing object to see what mongoDB returns to you
      // console.log(object)
      // I found the returned val, object.result.n shows # of docs added
      // How? see API docs below.
      // https://docs.mongodb.com/manual/reference/command/insert/ 
      // find a keyword, ok, they you get, n, in the same
      // example below
      // The following is an example document returned for a successful insert of a single document:
      // {ok: 1, n: 1 }

      // https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp

      // so if > 0, then something added, otherwise could not.
      if (object.result.n > 0) {
        // 200 OK
        res.status(200).json({ result: 'Successfully added' });
        // Check if the doc was added from the console and delete if needed :)
      } else {
        res.status(204).json({ result: 'Could not add' });
        // 204 No Content - I think this is the most appropriate
        // The server successfully processed the request and is not returning any content.
      }
    });

  })
});
//Creating function finished 

router.get('/', function (req, res) {
  
  console.log('below is what you requested in the BODY - btw GET does not need the body. Why? you do not need to provide any info to get a list of the collection.')
  console.log(req.body)

  console.log('/ requested!')

  res.json({'check':'Health Check, yay!'});
})
module.exports = router;

router.get('/customer', function (req, res) { //Reading information
  console.log('/customer requested! - PUT :D')

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var address = req.body.address;
  var city = req.body.city;
  var phoneNumber = req.body.phoneNumber;
  var status = req.body.status; 

  MongoClient.connect(url,{ useNewUrlParser: true }, function (err, client) {
    if (err) throw err

    var db = client.db('videostore')

    db.collection('custlisting').findOne(myJsonReq, function (err, object) {
      if (err) throw err

      if (object.result.n > 0) {
        // 200 OK
        res.status(200).json({ result: 'Successfully updated' });
      } else {
        res.status(204).json({ result: 'Could not update' });
      }
    });

  })

  router.get('/customer/:id', function (req, res) { //Reading information
    console.log('/customer id requested! - GET :D')

    var _id = req.body.id;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var address = req.body.address;
    var city = req.body.city;
    var phoneNumber = req.body.phoneNumber;
    var status = req.body.status; 
  
    MongoClient.connect(url,{ useNewUrlParser: true }, function (err, client) {
      if (err) throw err
  
      var db = client.db('videostore')
      const id = req.params.id;
      const details = {'_id' : new ObjectID(id)};
  
      db.collection('custlisting').findOne(details, (err, object) => {
        if (err) throw err
  
        if (object.result.n > 0) {
          res.status(200).json({ result: 'Found the Customer' });
        } else {
          res.status(204).json({ result: 'Could not find the customer' });
        }
      });
    })
  
    })
  


// Reading funcntion finished




  router.get('/customer/:id', function (req, res) {
    console.log('/id requested! - GET :)')
    const id = req.params.id;
    const details = {'_id' : new ObjectID(id)};
  
    // MongoClient.connect(url ,{ useNewUrlParser: true }, function (err, client) {
    //   if (err) throw err
    //   var db = client.db('videostore')
  
      db.collection('custlisting').findOne(details, (err, customerList) => {
        if (err) throw err
        res.status(200).json({ customerList });
      })
    })
  });
  router.put('/customer', function (req, res) { //Updating
    console.log('/customer requested! - POST :D')

  db.collection('custlisting').insert(myJsonReq, function (err, object) {
    if (err) throw err

      if (object.result.n > 0) {
        // 200 OK
        res.status(200).json({ result: 'Successfully updated' });
      } else {
        res.status(204).json({ result: 'Could not update' });
      }
    });
  })
