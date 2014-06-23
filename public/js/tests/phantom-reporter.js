( function( exports ) {
  var PhantomReporter = function( runner ) {
    var passes = 0;
    var failures = 0;

    runner.on( 'pass', function( test ) {
      passes++;
      console.log( 'PASS: ', test.fullTitle() );
    });

    runner.on( 'fail', function( test, err ) {
      failures++;
      console.log( 'FAIL: ', test.fullTitle() + ' -- ' + err.message );
    });

    runner.on( 'end', function() {
      console.log( 'TEST COMPLETE: ', passes + '/' + ( passes + failures ) );
    });
  };

  exports.PhantomReporter = PhantomReporter;
})( this );
