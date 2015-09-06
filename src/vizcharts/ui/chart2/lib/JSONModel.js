/**
 * @requires sap.ui.model.json.JSONModel
 */
jQuery.sap.require('sap.ui.model.json.JSONModel');
jQuery.sap.declare('chart2.lib.JSONModel');

/**
 * @class chart2.lib.JSONModel
 * @extends sap.ui.model.json.JSONModel
 *
 * @property {oModel} oModel
 */
sap.ui.model.json.JSONModel.extend('chart2.lib.JSONModel', /** @lends chart2.lib.JSONModel.prototype */ {
  oModel: {},

  /**
   * { function_description }
   *
   * @param {undefined|object} initialData { description }
   */
  constructor: function (initialData) {
    switch (typeof initialData) {
      case 'undefined':
        sap.ui.model.json.JSONModel.prototype.constructor.call(this, this.oModel);
        break;
      case 'object':
        this._fillInitialData(initialData);
        sap.ui.model.json.JSONModel.prototype.constructor.call(this, this.oModel);
        break;
      case 'string':
        var sSettings = 'chart2.configs.' + initialData;
        jQuery.sap.require(sSettings);
        var oSettings = eval(sSettings);

        this._fillInitialData(oSettings);
        sap.ui.model.json.JSONModel.prototype.constructor.call(this, this.oModel);
        break;
      default:
        sap.ui.model.json.JSONModel.prototype.constructor.apply(this, initialData);
    }
  },

  /**
   * { function_description }
   *
   * @param {undefined|object} initialData { description }
   */
  _fillInitialData: function (initialData) {
    for (var sField in this.oModel) {
      switch (typeof initialData[sField]) {
        case 'object':
          if (typeof initialData[sField].clone !== 'undefined') {
            this.oModel[sField] = initialData[sField].clone();
          } else {
            this.oModel[sField] = initialData[sField];
          }
          break;
        case 'undefined':
          break;
        default:
          this.oModel[sField] = initialData[sField];
      }

      delete initialData[sField];
    }

    for (var sField in initialData) {
      switch (typeof initialData[sField]) {
        case 'object':
          if (typeof initialData[sField].clone !== 'undefined') {
            this.oModel[sField] = initialData[sField].clone();
          } else {
            this.oModel[sField] = initialData[sField];
          }
          break;
        case 'undefined':
          break;
        default:
          this.oModel[sField] = initialData[sField];
      }
    }
  },

});
