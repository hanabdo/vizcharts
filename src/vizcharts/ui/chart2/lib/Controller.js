jQuery.sap.declare('chart2.lib.Controller');

/**
 * @class chart2.lib.Controller
 * @extends sap.ui.core.mvc.Controller
 * @abstract
 */
sap.ui.core.mvc.Controller.extend('chart2.lib.Controller', /** @lends chart2.lib.Controller.prototype */ {
  /**
   * [getEventBus description]
   * @return {} [description]
   */
  getEventBus: function () {
    var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
    return sap.ui.component(sComponentId).getEventBus();
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
