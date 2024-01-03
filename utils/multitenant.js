const fp = require('fastify-plugin');
const { Pool } = require('pg');

async function multitenantPlugin(fastify, options) {
  const { tenants } = options;

  if (!tenants || !Array.isArray(tenants)) {
    throw new Error('Invalid configuration for multiple tenants.');
  }

  const tenantConnections = {};

  // Create a connection pool for each database
  for (const tenantConfig of tenants) {
    const { name, ...tenantOptions } = tenantConfig;
    const pool = new Pool(tenantOptions);

    tenantConnections[name] = pool;
  }

  // Register the decorator to access the database connections in routes
  fastify.decorate('tenant', tenantConnections);

  fastify.addHook('onClose', (fastify, done) => {
    // Close all database connections when the Fastify instance is closed
    for (const pool of Object.values(tenantConnections)) {
      pool.end();
    }
    done();
  });
}


module.exports = fp(multitenantPlugin, {
  fastify: '4.x',
  name: 'multitenantPlugin',
});