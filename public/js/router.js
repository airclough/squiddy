define(
  [ 'backbone',
    'views/app' ],
  function( Backbone, AppView ) {
    'use strict';

    return Backbone.Router.extend({
      routes: {
        ''            : 'dashboard',
        'dashboard'   : 'dashboard',
        'campaign/:id': 'campaign'
      },

      initialize: function() {
        this.appView = new AppView();
      },

      dashboard: function() {
        this.navigate( 'dashboard', { trigger: false } );
        this.appView.renderDashboard();
      },

      campaign: function( id ) {
        this.appView.renderCampaign( id );
      }
    });
  }
);
