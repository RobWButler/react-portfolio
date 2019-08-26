const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProduction ? '/new-portfolio' : '',
  publicRuntimeConfig: {
    // used in '/components/Link.js/', for more details go to the component itself
    linkPrefix: isProduction ? '/new-portfolio' : ''
  }
};