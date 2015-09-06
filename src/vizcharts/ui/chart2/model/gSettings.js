/**
 * @requires chart2.lib.JSONModel
 */
jQuery.sap.require('chart2.lib.JSONModel');
jQuery.sap.declare('chart2.model.gSettings');

/**
 * General settings for application
 *
 * @class chart2.model.gSettings
 * @extends chart2.lib.JSONModel
 */
chart2.lib.JSONModel.extend('chart2.model.gSettings', {
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
