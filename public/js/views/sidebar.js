define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      template: function() {
        return ''
          + '<div class="user">'
            + '<div class="squiddy-logo">'
            + '</div>'
            + '<div class="info">'
              + '<div class="position">Angelrush</div>'
              + '<div class="email">Robby Fairclough</div>'
            + '</div>'
          + '</div>'
          + '<ul class="menu">'
            + '<li>dashboard</li>'
            + '<li>campaigns</li>'
            + '<li>signout</li>'
          + '</ul>';
      },

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this.template() );
      }
    });
  }
);
