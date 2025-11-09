const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

module.exports = function (context) {

  const config = getDefaultConfig(context.projectRoot);

  return withNativeWind(config, { input: './styles/global.css' });
};
