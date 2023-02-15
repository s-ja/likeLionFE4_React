// const babelConfig = {
//     "presets": ["@babel/preset-env"]
//   };

//   export default babelConfig;

const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};

export default babelConfig;