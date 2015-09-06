/**
 * @requires mdcontainer.lib.JSONModel
 */
jQuery.sap.require('mdcontainer.lib.JSONModel');
jQuery.sap.declare('mdcontainer.model.gSettings');

/**
 * General settings for application
 *
 * @class mdcontainer.model.gSettings
 * @extends mdcontainer.lib.JSONModel
 */
mdcontainer.lib.JSONModel.extend('mdcontainer.model.gSettings', {
  /**
   * @property {string} title
   */
  oModel: {
    title: '',
  },

});
