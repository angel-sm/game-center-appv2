/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
require('ignore-styles');

require('@babel/register')({
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
});

require('asset-require-hook')({
  extensions: ['jpg'],
  name: '/assets/[hash].[ext]',
});

require('./server');
