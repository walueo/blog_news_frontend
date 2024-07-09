const serverless = require('serverless-http');
const next = require('next');
const { createServer } = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

exports.handler = async (event, context) => {
  await app.prepare();

  // Dynamically import the Next.js config file
  const nextConfig = await import('./next.config.mjs');
  app.setConfig(nextConfig.default);

  const server = createServer((req, res) => {
    handle(req, res);
  });

  return serverless(server)(event, context);
};
