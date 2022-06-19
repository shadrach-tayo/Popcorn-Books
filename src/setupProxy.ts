import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  app.use(
    '/discover',
    createProxyMiddleware({
      target: 'http://localhost:3000/discover',
      changeOrigin: true,
    })
  );
};