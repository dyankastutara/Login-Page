const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      // fa541c
      // FF6A00
      "@primary-color": "#fa541c",
      "@layout-body-background": "#f5f5f5",
      "@layout-header-background": "#FFFFFF",
      "@font-size-base": "13px"
     },
  })(config, env);
  return config;
};
