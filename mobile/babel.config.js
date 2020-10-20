module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": ["transform-decorators-legacy"],
    "env": {
      "development": {
        "plugins": ["@babel/plugin-transform-react-jsx-source"]
      }
    }
  };
};
