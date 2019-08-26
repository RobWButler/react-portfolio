const debug = process.env.NODE_ENV !== "production";

module.exports = {
    exportPathMap: () => ({
      '/' : {page: '/'},
      '/index': { page: '/' },
      '/home': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/portfolio': { page: '/portfolio' },
    }),
    assetPrefix: !debug ? 'https://robwbutler.github.io/new-portfolio/' : '',
  }

