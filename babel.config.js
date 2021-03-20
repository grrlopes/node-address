module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "14.16.0",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@entities": "./src/entities",
          "@usecases": "./src/usecases",
          "@infraS": "./src/infra/store",
          "@infraP": "./src/infra/provider",

        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
