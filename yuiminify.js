/**
 * this code based on
 * http://jnelson.in/javascript/minify-multiple-javascript-files-using-yuicompressor-node-module/jacob-nelson
 *
 * @contributor Aleksey Krasnobaev <a.krasnobaev@bdo.ru>
 */
(function () {
'use strict';

var compressor = require('yuicompressor');

var compressorOptions = {
  // Compressor Options:
  charset: 'utf8',
  type: 'js',
  nomunge: false,
};

// This is the list of javascript files to be compressed,
// which is located in different paths
var file = [{
    path: './app/ui/',
    type: 'js',
    name: ['Component', 'Component-preload', 'TopRouter'],
  }, {
    path: './app/ui/configs/',
    type: 'js',
    name: ['defaultserver', 'customserver', 'main'],
  }, {
    path: './app/ui/controls/',
    type: 'js',
    name: ['CustomShell', 'ExtendedChartContainer', 'customChartTooltip',
               'DynamicTile', 'SimpleListItem', 'CommonHierInput'],
  }, {
    path: './app/ui/lib/',
    type: 'js',
    // @todo errors in datacontext
    name: ['bugFix', 'chartproperties', 'common',
                // 'datacontext',
                'formatters', 'vizRules', 'debug'],
  }, {
    path: './app/ui/lib/thirdparty/',
    type: 'js',
    name: ['Base64'],
  },

  // left module
  {
    path: './app/ui/modules/left/configs/',
    type: 'js',
    name: ['leftChartsConfig'],
  }, {
    path: './app/ui/modules/left/controller/',
    type: 'controller.js',
    name: ['LeftChart'],
  }, {
    path: './app/ui/modules/left/model/',
    type: 'js',
    name: ['leftChartsConfig', 'leftPieMasterData', 'leftChartsDescription',
               'leftTableMasterData', 'leftChartsMasterData'],
  },

  // right module
  {
    path: './app/ui/modules/right/configs/',
    type: 'js',
    name: ['rightChartsConfig'],
  }, {
    path: './app/ui/modules/right/controls/',
    type: 'js',
    name: ['StyledChartContainer'],
  }, {
    path: './app/ui/modules/right/controller/',
    type: 'controller.js',
    name: ['RightChart'],
  }, {
    path: './app/ui/modules/right/model/',
    type: 'js',
    name: ['rightChartsDescription', 'rightChartsMasterData',
              'rightTableMasterData'],
  },

  // top module
  {
    path: './app/ui/modules/top/controller/',
    type: 'controller.js',
    name: ['TopArea'],
  }, {
    path: './app/ui/modules/top/model/',
    type: 'js',
    name: ['microChartMasterData', 'orgUnitOptions', 'orgUnitSource',
              'orgUnitSourceFlat', 'tileData'],
  },

  // main module
  {
    path: './app/ui/modules/main/controller/',
    type: 'controller.js',
    name: ['App', 'Detail', 'Main'],
  }, {
    path: './app/ui/modules/main/model/',
    type: 'js',
    name: ['gFilter', 'gInds', 'gSettings'],
  }, {
    path: './app/ui/prototypes/',
    type: 'js',
    name: ['Controller', 'JSONModel'],
  },

  {
    path: './app/ui/mock/',
    type: 'js',
    name: ['data'],
  },
];

function yuiminify(i, j) {
  i = (i == undefined) ? 0 : i;
  j = (j == undefined) ? 0 : j;
  var filePath = file[i].path;
  var fileType = file[i].type;
  var name = file[i].name[j];
  var fileName         = filePath + name + '-dbg.' + fileType;
  var minifiedFileName = filePath + name + '.'     + fileType;
  if (j == file[i].name.length - 1) {
    i += 1;
    j = 0;
  } else {
    j += 1;
  }

  compressor.compress(
      fileName,
      compressorOptions,
      function (err, data, extra) {
        var fs = require('fs');
        fs.writeFile(minifiedFileName, data, function () {
          if (err) {
            console.error('Errors in: ' + minifiedFileName + '\n', err);
          } else {
            console.log('The file ' + minifiedFileName +
                        ' was saved successfully!');
            if (i != file.length) {
              yuiminify(i, j);
            }
          }
        });
      }
  );
}

yuiminify(0, 0);

}());
