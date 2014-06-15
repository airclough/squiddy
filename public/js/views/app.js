define(
  [ 'backbone',
    'views/sidebar' ],
  function( Backbone, SidebarView ) {
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
        return this;
      },

      renderSidebar: function() {
        this.$sidebar = new SidebarView( { el: this.$el.find( '#sidebar' ) } );
        return this;
      }
    });
  }
);
