const proxy = [
    {
      context: '/api',
      target: 'https://localhost:44364',
      pathRewrite: {'^/api' : ''},
      secure: false,
      changeOrigin: true
    }
  ];
  module.exports = proxy;