/**
 * @module main
 *
 * @requires chart1.lib.Controller
 * @requires chart1.configs.settings
 */
jQuery.sap.require('chart1.lib.Controller');
jQuery.sap.require('chart1.configs.settings');

/**
 * @class chart1.controller.Main
 * @extends chart1.lib.Controller
 */
chart1.lib.Controller.extend('chart1.controller.Main', /** @lends chart1.controller.Main */ {

  /* init */

  /**
   * [description]
   * @param {oEvent} oEvent
   */
  onInit: function (oEvent) {
    var oVizFrame = this.getView().byId('idVizFrameBar');
    var oPopOver = this.getView().byId('idPopOver');
    var oModel = new sap.ui.model.json.JSONModel(
            chart1.configs.settings.surlData
    );
    var oDataset = new sap.viz.ui5.data.FlattenedDataset(
            chart1.configs.settings.dataset
    );

    oVizFrame.setDataset(oDataset);
    oVizFrame.setModel(oModel);

    var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem(
            chart1.configs.settings.feedValueAxis
    );
    var feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem(
            chart1.configs.settings.feedCategoryAxis
    );
    var feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem(
            chart1.configs.settings.feedColor
    );

    oVizFrame.setVizProperties(
            chart1.configs.settings.vizProperties
    );

    oVizFrame.addFeed(feedValueAxis);
    oVizFrame.addFeed(feedCategoryAxis);
    oVizFrame.addFeed(feedColor);
    oPopOver.connect(oVizFrame.getVizUid());
  },

  /* eventBus handlers */

});
