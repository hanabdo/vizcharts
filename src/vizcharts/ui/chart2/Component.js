/**
 * @class chart2.Component
 * @extends sap.ui.core.UIComponent
 */
sap.ui.core.UIComponent.extend('chart2.Component', /** @lends chart2.Component.prototype */ {
  metadata: {
    name: 'chart example',
    version: '0.0.1',
    dependencies: {
      libs: ['sap.m'],
      components: [],
    },
    rootView: 'chart2.view.Main',
    routing: {
      config: {
        viewType: 'XML',
        viewPath: 'chart2.view',
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
