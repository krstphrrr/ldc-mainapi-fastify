const fp = require('fastify-plugin')
const qs = require('qs')

async function customQueryParserPlugin(fastify, options) {

  fastify.addHook("onRequest", (request, reply, done) => {
    if (options && options.disabled) {
      return done();
    }
    const rawUrl = request.raw.url;
    let url = rawUrl;
    if (!(options && options.disablePrefixTrim)) {
      url = rawUrl.replace(/\?{2,}/, "?");
    }

    const querySymbolIndex = url.indexOf("?");

    const query = querySymbolIndex !== -1 ? url.slice(querySymbolIndex + 1) : "";

    request.query = qs.parse(query, {comma:true, parseArrays:true});

    done();

    // request.query successfully parses possible arrays, but the contents of the array 
    // remain unvalidated. 
    // https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/
    // suggest using another validation engine such as joi (or customize ajv)
    // validator compiler?

  })
}

module.exports = fp(customQueryParserPlugin, {
  fastify: '4.x',
  name: 'CustomQueryParserPlugin',
});