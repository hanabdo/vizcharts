/**
 * @module main
 *
 * @requires chart2.lib.Controller
 * @requires chart2.model.gSettings
 */
jQuery.sap.require('chart2.lib.Controller');
jQuery.sap.require('chart2.model.gSettings');

/**
 * @class chart2.controller.Main
 * @extends chart2.lib.Controller
 */
chart2.lib.Controller.extend('chart2.controller.Main', /** @lends chart2.controller.Main */ {

  /* init */

  /**
   * [description]
   * @param {oEvent} oEvent
   */
  onInit: function (oEvent) {
    var oGSettingsModel = new chart2.model.gSettings('settings');
    var oSettings = oGSettingsModel.oData;

    var oVizFrame = this.getView().byId('idVizFrameBar');
    var oPopOver = this.getView().byId('idPopOver');
    var oModel = new sap.ui.model.json.JSONModel(oSettings.surlData);
    var oDataset = new sap.viz.ui5.data.FlattenedDataset(oSettings.dataset);

    oVizFrame.setDataset(oDataset);
    oVizFrame.setModel(oModel);

    var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem(oSettings.feedValueAxis);
    var feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem(oSettings.feedCategoryAxis);
    var feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem(oSettings.feedColor);

    oVizFrame.setVizProperties(oSettings.vizProperties
    );

    oVizFrame.addFeed(feedValueAxis);
    oVizFrame.addFeed(feedCategoryAxis);
    oVizFrame.addFeed(feedColor);
    oPopOver.connect(oVizFrame.getVizUid());
  },

  /* eventBus handlers */

});
