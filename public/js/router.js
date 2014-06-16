define(
  [ 'backbone',
    'events',
    'views/app' ],
  function( Backbone, events, AppView ) {
    'use strict';

    return Backbone.Router.extend({
      routes: {
        ''             : 'dashboard',
        'dashboard'    : 'dashboard',
        'campaigns/:id': 'campaign',
        'tests/:id'    : 'test'
      },

      initialize: function() {
        this.appView = new AppView();

        events.on( 'router:hashChange', this.hashChange, this );
      },

      hashChange: function( url ) {
        this.navigate( url, { trigger: true } );
      },

      dashboard: function() {
        this.navigate( 'dashboard', { trigger: false } );
        this.appView.renderDashboard();
      },

      campaign: function( id ) {
        this.appView.renderCampaign( id );
      },

      test: function( id ) {
        this.appView.renderTest( id );
      }
    });
  }
);
