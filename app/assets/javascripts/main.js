/*
 * Corner IDs:
 *
 *  1-------2
 *  -       -
 *  0-------3
 */


;(function($, window) {

  var app = {

    nodes: [],

    init: function() {

      app.createRoot();

    },

    createRoot: function() {

      app.root = new Root();
      app.root.$el.css({
        'left': app.root.x,
        'top': app.root.y
      });

    },

    getCornerId: function(node) {

      // return main root corner id

    },

    getHorizontal: function(parent, child) {
      var right = 'auto';
      var left = 'auto';

      if ( parent instanceof Root ) {
        if ( child.corner_id < 2 ) {
          right = document.width - app.root.x + 20;
        } else {
          left = app.root.x + app.root.$el.width() + 20;
        }
      }

      if ( parent instanceof Node ) {
        if ( child.corner_id < 2 ) {
          right = parent.right + 100;
        } else {
          left = parent.left + 100;
        }
      }

      return { right: right, left: left }
    },

    getVertical: function(parent, child) {
      var top;

      if ( child.corner_id === 0 || child.corner_id === 4 ) {
        top = parent.vertical.top + (parent.children.length * 100) + 100;
      } else {
        top = parent.vertical.top - (parent.children.length * 100) - 100;
      }

      return { top: top }
    },
    
    addNode: function(e) {
      var $parent = $(e.target);
      var parent = app.nodes[$parent.data('id')];
      var child = new Node(parent);
      child.render();
    }

  };

  function Root(){
    this.depth = 0;
    this.size = 100;
    this.$el = $('#root');

    this.children = [];

    this.x = document.width / 2;
    this.y = document.height / 2;
  }

  function Node(parent){
    this.depth = parent.depth + parent.children.length + 1;
    this.size = parent.size * 0.8;

    this.children = [];
    this.parent.children.push(this);
    this.corner_id = app.getCornerId(this);

    this.horizontal = app.getHorizontal(parent, this);
    this.vertical = app.getVertical(parent, this);

    this.id = app.nodes.length + 1;
    app.nodes.push(this);

    this.$el = $('<div/>', { 'data-id': this.id, class: 'node' });
  }

  Node.prototype.render = function() {
    $('body').append(this.$el);
  }

  window.app = app;
  $(document).ready(app.init);

  $(document).on('click', '#root', app.addNode);

})(jQuery, this);
