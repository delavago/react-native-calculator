module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['.'],
        alias: {
          '@pages': './src/pages',
          '@navigtor': './src/navigator'
        }
      }
    ],
    'jest-hoist'
  ]
};
