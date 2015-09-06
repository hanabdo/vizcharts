/**
 * mdcontainer top level router description
 *
 * @requires sap.m.routing.RouteMatchedHandler
 * @requires sap.ui.core.routing.History
 * @requires sap.ui.core.routing.Router
 */
jQuery.sap.require('sap.m.routing.RouteMatchedHandler');
jQuery.sap.require('sap.ui.core.routing.History');
jQuery.sap.require('sap.ui.core.routing.Router');
jQuery.sap.declare('mdcontainer.TopRouter');

/**
 * @class mdcontainer.TopRouter
 * @extends sap.ui.core.routing.Router
 */
sap.ui.core.routing.Router.extend('mdcontainer.TopRouter', /** @lends mdcontainer.TopRouter.prototype */ {
  /**
   * @constructs mdcontainer.TopRouter
   * @extends {sap.ui.core.routing.Router}
   */
  constructor: function () {
    sap.ui.core.routing.Router.apply(this, arguments);

    this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this);
  },

  /**
   * [destroy description]
   * @return {} [description]
   */
  destroy: function () {
    sap.ui.core.routing.Router.prototype.destroy.apply(this, arguments);

    this._oRouteMatchedHandler.destroy();
  },

  /**
   * [_findSplitApp description]
   * @return {} [description]
   */
  _findSplitApp: function () {
    var oRootView = this._oOwner.mAggregations.rootControl;
    var targetControl = this._oConfig.targetControl;

    if (oRootView instanceof sap.ui.core.mvc.View &&
        oRootView.byId(targetControl)) {
      return oRootView.byId(targetControl);
    }

    return oRootView.getParent() ?
        this._findSplitApp(oRootView.getParent(), targetControl) :
        null;
  },

});
