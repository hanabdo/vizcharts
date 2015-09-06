/**
 * @module main
 *
 * @requires mdcontainer.lib.Controller
 * @requires mdcontainer.model.gSettings
 * @requires mdcontainer.configs.settings
 */
jQuery.sap.require('mdcontainer.lib.Controller');
jQuery.sap.require('mdcontainer.model.gSettings');
jQuery.sap.require('mdcontainer.configs.settings');

/**
 * @class mdcontainer.controller.App
 * @extends mdcontainer.lib.Controller
 */
mdcontainer.lib.Controller.extend('mdcontainer.controller.App', /** @lends mdcontainer.controller.App */ {

  /* init */

  /**
   * Init application. Create global models.
   *
   * @param {oEvent} oEvent
   */
  onInit: function (oEvent) {
    var oSettingsModel = new mdcontainer.model.gSettings(
      mdcontainer.configs.settings
    );

    this.getView()
      .setModel(oSettingsModel, 'gSettings');
  },

  /* eventBus handlers */

});
