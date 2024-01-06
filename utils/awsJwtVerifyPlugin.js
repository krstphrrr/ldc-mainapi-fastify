const fp = require("fastify-plugin")
const { CognitoJwtVerifier } = require('aws-jwt-verify');

async function awsJwtVerifyPlugin(fastify, options) {
  // plugin that uses the prehandler hook to verify if the
  // request includes a bearer token. if found, it will validate it and 
  // attach the permission on the tenant property of the request object
  // this plugin is invoked on each request before the route is engaged.
  const { userPoolId, tokenUse, clientId } = options;

  if (!userPoolId || !tokenUse || !clientId) {
    throw new Error('Invalid configuration for AWS Cognito JWT verification.');
  }

  const cognitoJwtVerifier = new CognitoJwtVerifier({
    userPoolId,
    tokenUse,
    clientId,
  });

  // prehandler:
  fastify.addHook('preHandler', async (request, reply) => {
    const authorizationHeader = request.headers.authorization;
    let verifiedToken = null
    if (!authorizationHeader) {
      console.log("Not authorized")
    }

    try {
      let token
      if(token!=null){
        token = authorizationHeader.replace(/^Bearer\s/, '')
        verifiedToken = await cognitoJwtVerifier.verify(token)
      }
      
      request.tenant = groupDiscrimination(verifiedToken)

      // Attach the verified token to the request for further use in the route handler
      request.jwt = verifiedToken;
    } catch (error) {
      console.error('Error verifying JWT:', error);
      request.tenant = groupDiscrimination(verifiedToken)
      request.jwt = null;
      }
  });
}

function groupDiscrimination(verifiedToken){
  // function to parse the group permissions
  const res = verifiedToken
  if (res == undefined) {
    console.log('no hay permiso: limited client');
    return 'restricted';
  }
  if (res.hasOwnProperty('cognito:groups')) {
    console.log('it found a group');
    const [grp] = res['cognito:groups'];
    switch (grp) {
      case 'NDOW':
        console.log('NDOW');
        return 'unrestricted';
      default:
        console.log('but group not NDOW');
        return 'restricted';
    }
  } else {
    console.log('no group found');
    return 'restricted';
  }
}

module.exports = fp(awsJwtVerifyPlugin, {
  fastify: '4.x',
  name: 'awsJwtVerifyPlugin',
});