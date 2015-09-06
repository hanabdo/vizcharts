/**
 * @requires mdcontainer.TopRouter
 */
jQuery.sap.require('mdcontainer.lib.TopRouter');

/**
 * @class mdcontainer.Component
 * @extends sap.ui.core.UIComponent
 */
sap.ui.core.UIComponent.extend('mdcontainer.Component', /** @lends mdcontainer.Component.prototype */ {
  metadata: {
    name: 'master detail container',
    version: '0.0.1',
    dependencies: {
      libs: ['sap.m'],
      components: [],
    },
    rootView: 'mdcontainer.view.App',
    routing: {
      config: {
        routerClass: 'mdcontainer.TopRouter',
        viewType: 'XML',
        viewPath: 'mdcontainer.view',
        controlId: 'idAppControl',
        controlAggregation: 'detailPages',
        targetControl: 'idAppControl',
        targetAggregation: 'detailPages',
        bypassed: {
          target: ['master', 'notFound'],
        },
      },

      routes: [{
        pattern: '',
        name: 'master',
        view: 'Master',
        viewId: 'master',
        targetControl: 'idAppControl',
        targetAggregation: 'masterPages',
        subroutes: [{
          pattern: '{chartId}',
          name: 'charts',
          view: 'Detail',
          viewId: 'detail',
          targetAggregation: 'detailPages',
        }],
      }],

    },
  },

  /**
   * [init description]
   * @return {[type]} [description]
   */
  init: function () {
    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

    this.getRouter().initialize();
  },

});
