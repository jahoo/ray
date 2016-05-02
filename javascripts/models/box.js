(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  RaY.Models.Box = (function(superClass) {
    extend(Box, superClass);

    Box.prototype.collidable = true;

    Box.prototype.gravitable = true;

    Box.prototype.sourceWidth = 100;

    Box.prototype.sourceHeight = 100;

    Box.prototype.height = 20;

    Box.prototype.width = 20;

    function Box(world, x, y, s) {
      this.world = world;
      this.x = x;
      this.y = y;
      this.s = s;
      Box.__super__.constructor.call(this, this.world, "box");
    }

    return Box;

  })(RaY.Engine.Entity);

}).call(this);