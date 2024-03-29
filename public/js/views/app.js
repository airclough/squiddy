define(
  [ 'backbone',
    'models/campaign',
    'models/test',
    'collections/tests',
    'views/sidebar',
    'views/dashboard',
    'views/campaign',
    'views/test' ],
  function( Backbone, CampaignModel, TestModel, TestsCollection, SidebarView,
    DashboardView, CampaignView, TestView ) {
    'use strict';

    return Backbone.View.extend({
      el: '#app',

      template: function() {
        return ''
          + '<div id="sidebar"></div>'
          + '<div id="main"></div>';
      },

      initialize: function() {
        this.render()
          .renderSidebar();
      },

      render: function() {
        this.$el.html( this.template() );
        this.$main = this.$el.find( '#main' );
        return this;
      },

      renderSidebar: function() {
        this.$sidebar = new SidebarView( { el: this.$el.find( '#sidebar' ) } );
        return this;
      },

      renderDashboard: function() {
        this.$main.html( new DashboardView().el );
      },

      renderCampaign: function( id ) {
        var campaignModel = new CampaignModel( { id: id } );
        var testsCollection = new TestsCollection( { id: id } );

        this.$main.html( new CampaignView({
          model: campaignModel,
          collection: testsCollection
        }).el );
      },

      renderTest: function( id ) {
        var testModel = new TestModel( { _id: id } );

        this.$main.html( new TestView( { model: testModel } ).el );
      }
    });
  }
);
