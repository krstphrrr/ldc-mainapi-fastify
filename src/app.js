const path = require('node:path')
const AutoLoad = require('@fastify/autoload')
const fastifySwagger = require("@fastify/swagger")
const fastifySwaggerUI = require("@fastify/swagger-ui")

const awsJwtVerifyPlugin = require('./utils/awsJwtVerifyPlugin');
// const routesv1 = require('./routes')

// Pass --options via CLI arguments in command to enable these options.
const options = {

}

const swaggerOptions = {
  swagger: {
      info: {
          title: "LDC API",
          description: "API Description",
          version: "1.0.0",
      },
      host: "localhost",
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [{ name: "Default", description: "Default" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};
module.exports = async function (fastify, opts) {

  fastify.register((fastify,opts, done)=>{
    fastify.get('/',(req,res)=>{
      let updated = new Date(2024,3,6)
      res.send({"lastUpdated":updated.toISOString()})
    
    })
    done()
  })

  // fastify.register(routesv1,{prefix: '/v1'})
// single permission
  fastify.register(require('@fastify/postgres'),{
    name: 'ndow',
    connString: connString(process.env.NDOWU, process.env.NDOWPW),
    max:20
  })

  fastify.register(require('@fastify/postgres'),{
    name: 'blm',
    connString: connString(process.env.BLMU, process.env.BLMPW),
    max:20
  })

  fastify.register(require('@fastify/postgres'),{
    name: 'nwern',
    connString: connString(process.env.NWERNU, process.env.NWERNPW),
    max:20
  })

  // two permissions
  fastify.register(require('@fastify/postgres'),{
    name: 'ndow_nwern',
    connString: connString(process.env.NDOWNWERNU, process.env.NDOWNWERNPW),
    max:20
  })

  fastify.register(require('@fastify/postgres'),{
    name: 'nwern_blm',
    connString: connString(process.env.BLMNWERNU, process.env.BLMNWERNPW),
    max:20
  })

  fastify.register(require('@fastify/postgres'),{
    name: 'ndow_blm',
    connString: connString(process.env.NDOWBLMU, process.env.NDOWBLMPW),
    max:20
  })

  // full permission

  fastify.register(require('@fastify/postgres'),{
    name: 'ndow_blm_nwern',
    connString: connString(process.env.NDOWBLMNWERNU, process.env.NDOWBLMNWERNPW),
    max:20
  })


  fastify.register(awsJwtVerifyPlugin, {
    userPoolId: process.env.USERPOOLID,
    tokenUse: process.env.TOKENUSE,
    clientId: process.env.CLIENTID,
  });




  fastify.register(require('@fastify/postgres'),{
    name: 'restricted',
    host: process.env.RES_HOST,
    port: process.env.RES_PORT,
    database: process.env.RES_DB,
    user: process.env.RES_USER,
    password: process.env.RES_PW,
    max:20
  })

  fastify.register(fastifySwagger, swaggerOptions)
  fastify.register(fastifySwaggerUI, swaggerUiOptions)

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname,'plugins'),
    // dirNameRoutePrefix: false,
    options: Object.assign({}, opts)
  })
  

  // This loads all plugins defined in routes
  // define your routes in one of these
  // fastify.register(AutoLoad, {
  //   dir: path.join(__dirname,src, 'routes'),
  //   options: Object.assign({}, opts)
  // })
}


 function connString(unres_u, unres_pw){
  const str = `postgres://${unres_u}:${unres_pw}@${process.env.UN_HOST}:${process.env.UN_PORT}/${process.env.UN_DB}`
  return str
}

module.exports.options = options
