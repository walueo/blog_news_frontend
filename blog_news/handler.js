const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

module.exports.handler = async (event) => {
  await app.prepare();
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      req.url = event.path;
      handle(req, res)
        .then(resolve)
        .catch(reject);
    });

    server.listen(3000, (err) => {
      if (err) return reject(err);
    });
  });
};
