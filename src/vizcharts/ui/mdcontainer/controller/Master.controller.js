/**
 * @module main
 *
 * @requires mdcontainer.lib.Controller
 */
jQuery.sap.require('mdcontainer.lib.Controller');

/**
 * @class mdcontainer.controller.Master
 * @extends mdcontainer.lib.Controller
 */
mdcontainer.lib.Controller.extend('mdcontainer.controller.Master', /** @lends mdcontainer.controller.Master */ {

  /* init */

  /**
   * [description]
   * @param {sap.ui.base.Event} oControlEvent
   */
  onInit: function (oControlEvent) {
    this.getRouter().attachRoutePatternMatched(this._onMasterMatched, this);
  },

  /* routing */

  /**
   * [_onMasterMatched description]
   */
  _onMasterMatched: function () {
  },

  /**
   * [navToChart description]
   * @param {sap.ui.base.Event} oControlEvent
   * @param {sap.ui.base.EventProvider} oControlEvent.getSource
   * @param {object} oControlEvent.getParameters
   */
  navToChart: function (oControlEvent) {
    var sChartUrl = oControlEvent.getSource().getSelectedItem().data('name');
    this.getRouter().navTo(sChartUrl);
  },

  /* eventBus handlers */

});
