const { NextApiHandler } = require('next');

const nextHandler = async (event, context) => {
  const app = require('next')({
    dev: process.env.NODE_ENV !== 'production',
    conf: {
      // Any custom configuration for Next.js
    },
  });

  const handle = app.getRequestHandler();

  await app.prepare();

  return handle(event, context);
};

exports.handler = nextHandler;
