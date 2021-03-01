module.exports = (api) => {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        loose: true,
      },
    ],
    "@babel/preset-typescript",
  ];

  return {
    presets,
  };
};
