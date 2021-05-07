/* eslint-disable no-dupe-keys */

const pathPlugin = [
  [
    'module-resolver',
    {
      root: ['./'],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '@components': './components',
        '@recoil': './recoil',
        '@screens': './screens',
        '@navigations': './navigations',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...pathPlugin],
};
