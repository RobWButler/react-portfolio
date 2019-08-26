const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/index": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      "/portfolio": { page: "/portfolio" },
      "../../static": { page: "./static"}
    };

    return paths;
  }
};
module.exports = {
  assetPrefix: isProduction ? '/react-portfolio' : '',
  publicRuntimeConfig: {
    // used in '/components/Link.js/', for more details go to the component itself
    linkPrefix: isProduction ? '/react-portfolio' : ''
  }
}; 