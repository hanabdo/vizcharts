/**
 * @requires chart1.lib.JSONModel
 */
jQuery.sap.require('chart1.lib.JSONModel');
jQuery.sap.declare('chart1.model.gSettings');

/**
 * General settings for application
 *
 * @class chart1.model.gSettings
 * @extends chart1.lib.JSONModel
 */
chart1.lib.JSONModel.extend('chart1.model.gSettings', {
  /**
   * @property {string} title
   */
  oModel: {
    vizProperties: {},

    surlData: '',

    dataset: {},

    feedValueAxis: {},
    feedCategoryAxis: {},
    feedColor: {},
  },

});
