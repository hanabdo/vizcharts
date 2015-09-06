jQuery.sap.declare('mdcontainer.lib.Controller');

/**
 * @class mdcontainer.lib.Controller
 * @extends sap.ui.core.mvc.Controller
 * @abstract
 */
sap.ui.core.mvc.Controller.extend('mdcontainer.lib.Controller', /** @lends mdcontainer.lib.Controller.prototype */ {
  /**
   * [getEventBus description]
   * @return {} [description]
   */
  getEventBus: function () {
    var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
    return sap.ui.component(sComponentId).getEventBus();
  },

  /**
   * [getRouter description]
   * @return {} [description]
   */
  getRouter: function () {
    return sap.ui.core.UIComponent.getRouterFor(this);
  },

  /**
   * [getLogger description]
   * @return {} [description]
   */
  getLogger: function () {
    var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
    return jQuery.sap.log.getLogger(sap.ui.component(sComponentId));
  },

});
