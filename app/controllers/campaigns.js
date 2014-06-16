'use strict';

var MongoClient = require( 'mongodb' ).MongoClient;

var mongo;

MongoClient.connect( 'mongodb://localhost:27017/squiddy', function( err, db ) {
  if( err ) throw err;

  mongo = db;
});


module.exports = ( function() {
  function readOne( req, res ) {
    mongo.collection( 'campaigns', function( err, collection ) {
      if( err ) throw err;

      collection.findOne( { id: req.params.id }, function( err, doc ) {
        if( err ) throw err;

        res.json( doc );
      });
    });
  }

  return {
    readOne: readOne
  };
})();
