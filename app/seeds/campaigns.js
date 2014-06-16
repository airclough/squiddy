'use strict';

var MongoClient = require( 'mongodb' ).MongoClient;

MongoClient.connect( 'mongodb://localhost:27017/squiddy', function( err, db ) {
  if( err ) throw err;

  db.collection( 'campaigns', function( err, collection ) {
    if( err ) throw err;

    collection.insert({
      id: '1841',
      brand: 'HealthRX',
      product: 'Pure Garcinia Cambogia'
    }, function( err, result ) {
      console.log( result );
    });
  });
});
