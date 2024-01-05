const fp = require('fastify-plugin');

async function genericBatchPlugin(fastify, options) {
// todo
}
module.exports = fp(genericBatchPlugin, {
  fastify: '4.x',
  name: 'genericBatchPlugin',
});