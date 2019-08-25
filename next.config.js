const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
    exportPathMap: () => ({
      '/' : {page: '/'},
      '/index': { page: '/' },
      '/home': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/portfolio': { page: '/portfolio' },
    }),
    assetPrefix: isProd ? '/new-portfolio' : '',
  }