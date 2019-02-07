module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["./src/app"],
        "alias": {
          "components": "./src/app/components",
          "views": "./src/app/views",
        }
      }
    ]
  ]
}
