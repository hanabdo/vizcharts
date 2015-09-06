jQuery.sap.declare('chart2.configs.settings');

chart2.configs.settings = {
  vizProperties: {
    "propertyZone": [
        {
            "name": "title",
            "bound": [
                [
                    [
                        282,
                        24
                    ],
                    [
                        454,
                        24
                    ],
                    [
                        454,
                        41
                    ],
                    [
                        282,
                        41
                    ]
                ]
            ]
        },
        {
            "name": "legend",
            "bound": [
                [
                    [
                        675,
                        81
                    ],
                    [
                        782,
                        81
                    ],
                    [
                        782,
                        135
                    ],
                    [
                        675,
                        135
                    ]
                ]
            ]
        },
        {
            "name": "plot",
            "bound": [
                [
                    [
                        91,
                        81
                    ],
                    [
                        645,
                        81
                    ],
                    [
                        645,
                        609
                    ],
                    [
                        91,
                        609
                    ]
                ]
            ]
        },
        {
            "name": "categoryAxis title",
            "bound": [
                [
                    [
                        353,
                        660
                    ],
                    [
                        383,
                        660
                    ],
                    [
                        383,
                        676
                    ],
                    [
                        353,
                        676
                    ]
                ]
            ]
        },
        {
            "name": "categoryAxis",
            "bound": [
                [
                    [
                        90,
                        608
                    ],
                    [
                        646,
                        608
                    ],
                    [
                        646,
                        635
                    ],
                    [
                        90,
                        635
                    ]
                ]
            ]
        },
        {
            "name": "valueAxis title",
            "bound": [
                [
                    [
                        25,
                        327
                    ],
                    [
                        41,
                        327
                    ],
                    [
                        41,
                        363
                    ],
                    [
                        25,
                        363
                    ]
                ]
            ]
        },
        {
            "name": "valueAxis",
            "bound": [
                [
                    [
                        56,
                        74
                    ],
                    [
                        91,
                        74
                    ],
                    [
                        91,
                        616
                    ],
                    [
                        56,
                        616
                    ]
                ]
            ]
        }
    ],
    "feedingZone": [
        {
            "name": "legend",
            "bindDef": [
                {
                    "id": "color"
                }
            ],
            "bound": [
                [
                    [
                        675.296875,
                        81
                    ],
                    [
                        782,
                        81
                    ],
                    [
                        782,
                        135
                    ],
                    [
                        675.296875,
                        135
                    ]
                ]
            ]
        },
        {
            "name": "plot",
            "bindDef": [
                {
                    "id": "categoryAxis"
                },
                {
                    "id": "color"
                },
                {
                    "id": "valueAxis"
                }
            ],
            "bound": [
                [
                    [
                        90.97757720947266,
                        81
                    ],
                    [
                        644.9768447875977,
                        81
                    ],
                    [
                        644.9768447875977,
                        608.760009765625
                    ],
                    [
                        90.97757720947266,
                        608.760009765625
                    ]
                ]
            ]
        },
        {
            "name": "categoryAxis",
            "bindDef": [
                {
                    "id": "categoryAxis"
                }
            ],
            "bound": [
                [
                    [
                        90.97757720947266,
                        608.760009765625
                    ],
                    [
                        644.9768447875977,
                        608.760009765625
                    ],
                    [
                        644.9768447875977,
                        676.0000076293945
                    ],
                    [
                        90.97757720947266,
                        676.0000076293945
                    ]
                ]
            ]
        },
        {
            "name": "valueAxis",
            "bindDef": [
                {
                    "id": "valueAxis"
                }
            ],
            "bound": [
                [
                    [
                        24,
                        74.1875
                    ],
                    [
                        90.97757720947266,
                        74.1875
                    ],
                    [
                        90.97757720947266,
                        615.96875
                    ],
                    [
                        24,
                        615.96875
                    ]
                ]
            ]
        }
    ],
    "general": {
        "background": {
            "border": {
                "bottom": {
                    "visible": false
                },
                "left": {
                    "visible": false
                },
                "right": {
                    "visible": false
                },
                "stroke": "#d8d8d8",
                "strokeWidth": 1,
                "top": {
                    "visible": false
                }
            },
            "color": "#ffffff",
            "drawingEffect": "normal",
            "gradientDirection": "vertical",
            "visible": true
        },
        "layout": {
            "padding": 24,
            "paddingBottom": null,
            "paddingLeft": null,
            "paddingRight": null,
            "paddingTop": null
        },
        "tabIndex": 0,
        "groupData": true,
        "thumbnailMode": false
    },
    "legend": {
        "drawingEffect": "normal",
        "label": {
            "style": {
                "color": "#000000",
                "fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "12px",
                "fontStyle": "normal",
                "fontWeight": "normal"
            }
        },
        "postRenderer": null,
        "scrollbar": {
            "thumb": {
                "fill": "#e6e6e6",
                "hoverFill": "#dedede"
            },
            "track": {
                "fill": "#f7f7f7"
            }
        },
        "title": {
            "style": {
                "color": "#000000",
                "fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "14px",
                "fontStyle": "normal",
                "fontWeight": "bold"
            },
            "text": null,
            "visible": false
        },
        "visible": true,
        "hoverShadow": {
            "color": "#f0f0f0"
        },
        "isScrollable": true,
        "itemMargin": 0.5,
        "marker": {
            "size": null,
            "shape": "squareWithRadius"
        },
        "mouseDownShadow": {
            "color": "#cccccc"
        },
        "order": null
    },
    "legendGroup": {
        "computedVisibility": true,
        "layout": {
            "maxHeight": "0.25",
            "maxWidth": "0.25",
            "position": "auto",
            "respectPlotPosition": false
        },
        "renderTo": null,
        "forceToShow": true
    },
    "plotArea": {
        "dataPoint": {
            "stroke": {
                "color": "#000000",
                "visible": false
            }
        },
        "background": {
            "border": {
                "bottom": {
                    "visible": false
                },
                "left": {
                    "visible": false
                },
                "right": {
                    "visible": false
                },
                "stroke": "#d8d8d8",
                "strokeWidth": 1,
                "top": {
                    "visible": false
                }
            },
            "color": "#ffffff",
            "drawingEffect": "normal",
            "gradientDirection": "vertical",
            "visible": true
        },
        "colorPalette": [
            "sapUiChartPaletteQualitativeHue1",
            "sapUiChartPaletteQualitativeHue2",
            "sapUiChartPaletteQualitativeHue3",
            "sapUiChartPaletteQualitativeHue4",
            "sapUiChartPaletteQualitativeHue5",
            "sapUiChartPaletteQualitativeHue6",
            "sapUiChartPaletteQualitativeHue7",
            "sapUiChartPaletteQualitativeHue8",
            "sapUiChartPaletteQualitativeHue9",
            "sapUiChartPaletteQualitativeHue10",
            "sapUiChartPaletteQualitativeHue11"
        ],
        "dataLabel": {
            "formatString": "#,##0",
            "hideWhenOverlap": true,
            "renderer": null,
            "style": {
                "color": "#000000",
                "fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "12px",
                "fontStyle": "normal",
                "fontWeight": "normal"
            },
            "unitFormatType": "FinancialUnits",
            "visible": true
        },
        "dataPointStyle": null,
        "defaultOthersStyle": {
            "color": "#000000"
        },
        "drawingEffect": "normal",
        "gridline": {
            "color": "#e5e5e5",
            "size": 1,
            "type": "line",
            "visible": true,
            "zeroLine": {
                "color": null,
                "highlight": true,
                "unhighlightAxis": true
            }
        },
        "markerRenderer": null,
        "referenceLine": {
            "defaultStyle": {
                "color": "#333333",
                "label": {
                    "background": "#ffffff",
                    "color": "#000000",
                    "fontFamily": "Arial, Helvetica, sans-serif",
                    "fontSize": "12px",
                    "fontStyle": "normal",
                    "fontWeight": "normal"
                },
                "size": 1,
                "type": "dotted"
            },
            "line": null
        },
        "scrollbar": {
            "thumb": {
                "fill": "#e6e6e6",
                "hoverFill": "#dedede"
            },
            "track": {
                "fill": "#f7f7f7"
            }
        },
        "window": {
            "end": null,
            "start": null
        },
        "dataPointSize": {
            "max": 96,
            "min": 24
        },
        "gap": {
            "barSpacing": 1,
            "groupSpacing": 1,
            "innerGroupSpacing": 0.125
        },
        "isFixedDataPointSize": true,
        "primaryScale": {
            "autoMaxValue": 700,
            "autoMinValue": -100,
            "fixedRange": false,
            "maxValue": null,
            "minValue": null
        }
    },
    "title": {
        "alignment": "center",
        "layout": {
            "maxHeight": 0.2
        },
        "style": {
            "color": "#333333",
            "fontFamily": "Arial, Helvetica, sans-serif",
            "fontSize": "16px",
            "fontStyle": "normal",
            "fontWeight": "bold"
        },
        "text": "Profit by City and Year",
        "visible": true
    },
    "interaction": {
        "behaviorType": "sFinBehavior",
        "decorations": null,
        "deselected": {
            "color": null,
            "opacity": 0.4,
            "stroke": {
                "color": "darken(20%)",
                "visible": false,
                "width": "1px"
            }
        },
        "hover": {
            "color": null,
            "opacity": 1,
            "stroke": {
                "color": "darken(20%)",
                "visible": true,
                "width": "2px"
            }
        },
        "selectability": {
            "legendSelection": true,
            "mode": "multiple",
            "plotLassoSelection": true,
            "plotStdSelection": true,
            "axisLabelSelection": true
        },
        "selected": {
            "color": null,
            "stroke": {
                "color": "darken(20%)",
                "visible": true,
                "width": "1px"
            }
        },
        "enableKeyboard": true,
        "zoom": {
            "direction": "categoryAxis",
            "enablement": "enabled"
        }
    },
    "tooltip": {
        "background": {
            "borderColor": "#cccccc",
            "color": "#ffffff"
        },
        "bodyDimensionLabel": {
            "color": "#666666"
        },
        "bodyDimensionValue": {
            "color": "#666666"
        },
        "bodyMeasureLabel": {
            "color": "#666666"
        },
        "bodyMeasureValue": {
            "color": "#000000"
        },
        "closeButton": {
            "backgroundColor": "#ffffff",
            "borderColor": "#cccccc"
        },
        "footerLabel": {
            "color": "#000000"
        },
        "formatString": null,
        "layinChart": true,
        "postRender": null,
        "preRender": null,
        "separationLine": {
            "color": "#a7a9ac"
        },
        "unitFormatType": "FinancialUnits",
        "visible": false
    },
    "valueAxis": {
        "axisLine": {
            "size": 1,
            "visible": false
        },
        "axisTick": {
            "visible": true
        },
        "color": "#333333",
        "label": {
            "formatString": null,
            "style": {
                "color": "#333333",
                "fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "12px",
                "fontStyle": "normal",
                "fontWeight": "normal"
            },
            "unitFormatType": "FinancialUnits",
            "visible": true
        },
        "layout": {
            "maxHeight": 0.25,
            "maxWidth": 0.25
        },
        "title": {
            "applyAxislineColor": false,
            "style": {
                "color": "#000000",
                "fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "14px",
                "fontStyle": "normal",
                "fontWeight": "bold"
            },
            "text": null,
            "visible": true
        },
        "visible": true
    },
    "categoryAxis": {
        "axisLine": {
            "size": 1,
            "visible": true
        },
        "axisTick": {
            "visible": true
        },
        "color": "#333333",
        "hoverShadow": {
            "color": "#f0f0f0"
        },
        "label": {
            "angle": 45,
            "hideSubLevels": false,
            "rotation": "auto",
            "style": {
                "color": "#333333",
                "fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "12px",
                "fontStyle": "normal",
                "fontWeight": "normal"
            },
            "truncatedLabelRatio": 0.2,
            "visible": true
        },
        "labelRenderer": null,
        "layout": {
            "maxHeight": 0.3,
            "maxWidth": 0.3
        },
        "mouseDownShadow": {
            "color": "#cccccc"
        },
        "title": {
            "applyAxislineColor": false,
            "style": {
                "color": "#000000",
                "fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "14px",
                "fontStyle": "normal",
                "fontWeight": "bold"
            },
            "text": null,
            "visible": true
        },
        "visible": true
    }
},

  surlData: '/sap/ui5/1/sdk/test-resources/sap/viz/demokit/dataset/bookstore_fiori/ByItemCity_sum.json',

  dataset: {
    measures: [{
      name: 'Profit',
      value: '{Profit}',
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
    values: ['Profit'],
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
