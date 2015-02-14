// Generated by CoffeeScript 1.8.0
(function() {
  module.exports = {
    contextTypes: {
      shared: React.PropTypes.any
    },
    dispatch: function() {
      var _ref;
      return (_ref = this.context.shared).emit.apply(_ref, arguments);
    },
    createChildRouter: function(node) {
      var DefaultLayout, Router, childRouter;
      Router = require('./router');
      DefaultLayout = require('./default-layout');
      childRouter = new Router(DefaultLayout, node);
      return childRouter;
    },
    createContextOnNode: function(node, contextClass, props) {
      var childRouter;
      childRouter = this.createChildRouter(node);
      return childRouter.pushContext(contextClass, props).then((function(_this) {
        return function(context) {
          return Promise.resolve(context);
        };
      })(this));
    }
  };

}).call(this);