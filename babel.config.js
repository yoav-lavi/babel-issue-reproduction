const test = process.env.BABEL_ENV === "test";
const useESModules = test ? {} : { useESModules: false };

module.exports = {
  sourceType: "module",
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@babel/preset-env",
  ],
  plugins: [["@babel/plugin-transform-runtime", { ...useESModules }], "lodash"],
};
