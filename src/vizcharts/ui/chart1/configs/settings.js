jQuery.sap.declare('chart1.configs.settings');

chart1.configs.settings = {
  vizProperties: {
    valueAxis: {
      label: {
        formatString: 'u',
      },
    },
    plotArea: {
      dataLabel: {
        visible: true,
        formatString: '#,##0',
      },
    },
    legend: {
      title: {
        visible: false,
      },
    },

    title: {
      visible: true,
      text: 'Revenue by City and Item Category',
    },
  },

  surlData: '/sap/ui5/1/sdk/test-resources/sap/viz/demokit/dataset/bookstore_fiori/ByItemCity_sum.json',

  dataset: {
    dimensions: [{
      name: 'Item Category',
      value: '{Item Category}',
    }, {
      name: 'City',
      value: '{City}',
    }],
    measures: [{
      name: 'Revenue',
      value: '{Revenue}',
    }],
    data: {
      path: '/book',
    },
  },

  feedValueAxis: {
    uid: 'valueAxis',
    type: 'Measure',
    values: ['Revenue'],
  },
  feedCategoryAxis: {
    uid: 'categoryAxis',
    type: 'Dimension',
    values: ['Item Category'],
  },
  feedColor: {
    uid: 'color',
    type: 'Dimension',
    values: ['City'],
  },

};
