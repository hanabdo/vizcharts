jQuery.sap.declare('chart2.configs.settings2');

chart2.configs.settings2 = {
  vizProperties: {
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
      text: 'Profit by City and Year',
    },
    valueAxis: {
      label: {
        formatString: 'u',
      },
    },
  },

  surlData: '/sap/ui5/1/sdk/test-resources/sap/viz/demokit/dataset/bookstore_fiori/ByItemCity_sum.json',

  dataset: {
    measures: [{
      name: 'Revenue',
      value: '{Revenue}',
    }],
    dimensions: [{
      name: 'Item Category',
      value: '{Item Category}',
    }, {
      name: 'City',
      value: '{City}',
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
