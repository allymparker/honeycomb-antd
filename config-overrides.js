const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@red-base': '#cc0000',
        '@blue-base': '#3c85df',
        '@green-base': '#1aac1e',
        '@orange-base':'#fc9003',
        '@yellow-base': '#fed100',
        
        '@font-family' : '"Roboto", "Helvetica Neue", Arial, sans-serif',
        
        '@text-color': '#373737',
        '@font-size-base': '16px',
        '@link-color': '#336dc2',
        // '@line-height-base': '26px',
        '@heading-color': '#373737',
        '@border-radius-base': '5px',

        // Forms
        '@input-border-color': '#6e6e6e',

        // Alerts
        '@alert-no-icon-padding-vertical': '15px',

        '@alert-success-bg-color': '#f2f2f2',
        '@alert-info-bg-color': '#f2f2f2',
        '@alert-warning-bg-color': '#f2f2f2',
        '@alert-error-bg-color': '#f2f2f2',

        '@alert-success-border-color': '#1aac1e',
        '@alert-info-border-color': '#3c85df',
        '@alert-warning-border-color': '#fed100',
        '@alert-error-border-color': '#cc0000',

        //tooltip
        '@tooltip-bg': 'black'
      },
    },
  })
);
