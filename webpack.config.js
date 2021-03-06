const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '@platzily-ui/styling': path.resolve(__dirname, './packages/styling/src'),
      '@platzily-ui/utils': path.resolve(__dirname, './packages/utils/src'),
      '@platzily-ui/icons': path.resolve(__dirname, './packages/icons/src'),
      '@platzily-ui/components': path.resolve(__dirname, './packages/components/src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.d.ts'],
  },
};
