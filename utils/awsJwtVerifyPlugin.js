const fp = require("fastify-plugin")
const { CognitoJwtVerifier } = require('aws-jwt-verify');

async function awsJwtVerifyPlugin(fastify, options) {
  //  getting all credentials for aws jwt validation
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
      // return reply.status(401).send({ error: 'Unauthorized - Missing Authorization Header' });
    }

    try {
      let token
      // Verify the JWT token using the aws-jwt-verify package
      if(token!=null){
        token = authorizationHeader.replace(/^Bearer\s/, '')
        verifiedToken = await cognitoJwtVerifier.verify(token)
      }
      // const verifiedToken = token
      console.log("ANTES DE DISCRIMINATE")
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