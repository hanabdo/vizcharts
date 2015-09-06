/**
 * @module main
 *
 * @requires mdcontainer.lib.Controller
 */
jQuery.sap.require('mdcontainer.lib.Controller');

/**
 * @class mdcontainer.controller.Detail
 * @extends mdcontainer.lib.Controller
 */
mdcontainer.lib.Controller.extend('mdcontainer.controller.Detail', /** @lends mdcontainer.controller.Detail */ {

  /* init */

  /**
   * [description]
   * @param {sap.ui.base.Event} oControlEvent
   */
  onInit: function (oControlEvent) {
    this.getRouter().attachRoutePatternMatched(this._onChartMatched, this);
  },

  /* routing */

  _onChartMatched: function () {

  },

  /* eventBus handlers */

});
