jQuery.sap.declare('chart1.lib.Controller');

/**
 * @class chart1.lib.Controller
 * @extends sap.ui.core.mvc.Controller
 * @abstract
 */
sap.ui.core.mvc.Controller.extend('chart1.lib.Controller', /** @lends chart1.lib.Controller.prototype */ {
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
