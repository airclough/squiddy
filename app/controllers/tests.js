'use strict';

var MongoClient = require( 'mongodb' ).MongoClient;

var mongo;

MongoClient.connect( 'mongodb://localhost:27017/squiddy', function( err, db ) {
  if( err ) throw err;

  mongo = db;
});

module.exports = ( function() {
  function create( req, res ) {
    require( '../tests/phantom' )( 'squiddy' );

    mongo.collection( 'tests', function( err, collection ) {
      if( err ) throw err;

      collection.insert({
        campaignID: req.body.campaignID,
        complete  : false
      }, function( err, doc ) {
        if( err ) throw err;

        res.json( doc );
      });
    });
  }

  function readOne( req, res ) {
    mongo.collection( 'tests', function( err, collection ) {
      if( err ) throw err;

      collection.findOne( { _id: req.params.id }, function( err, doc ) {
        if( err ) throw err;

        res.json( doc );
      });
    });
  }

  return {
    create : create,
    readOne: readOne
  };
})();
