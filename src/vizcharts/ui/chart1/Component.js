/**
 * @class chart1.Component
 * @extends sap.ui.core.UIComponent
 */
sap.ui.core.UIComponent.extend('chart1.Component', /** @lends chart1.Component.prototype */ {
  metadata: {
    name: 'chart example',
    version: '0.0.1',
    dependencies: {
      libs: ['sap.m'],
      components: [],
    },
    rootView: 'chart1.view.Main',
    routing: {
      config: {
        viewType: 'XML',
        viewPath: 'chart1.view',
      },
    },
  },

  /**
   * [init description]
   * @return {[type]} [description]
   */
  init: function () {
    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
  },

});
