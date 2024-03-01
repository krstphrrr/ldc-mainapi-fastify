# fastify main api


## updates: 
2024-02-29: v1.0.5
- parses the queryparam 'take' as an alternative to 'limit' 
- bumped docker/login-action to v3
- bumped actions/checkout to v4.1.1

2024-02-29: v1.0.4
- made streaming default, changed the `/api/stream` to `/api/v1`.
- batch is now an option if the query param 'batch=true' is included in the request
ex: `api.com\table?limit=3&batch=true` (note the batch=true)
- upgraded build-push-action from v3 to v5.1.0

## features TODO
### functional features
- [x] database multitenancy
- - 2024-01-04 official pg has multiuser capability 
- [x] json route validation/serialization
- [x] streaming endpoints 
- - 2024-01-04 two main api endpoints`/api/batch` and `/api/stream`
- [x] cognito plugin
- [x] 2024-01-04 batch handler (regular pagination)

### LDC specifics
- [x] current LDC endpoint migration
- [ ] like functionality
- [x] comma separated param parsing
- [x] cognito api login portal

### portability
- [x] cicd git
- [x] containerization 
- [ ] dev/prod/test subdomain registration

## PLUGIN ORDER
queryparser>dynamicquery>genericbatch

## Request flow:

1. Request to endpoint received

2. `./plugins/customQueryStringParserPlugin` intercepts the request with the qs (querystring) package to check for arrays in the query strings and separate them: key = ["value1, value2"] => key ["value1", "value2"].

3. `./utils/awsJwtVerifyPlugin` receives the request first using the 'preHandler' hook. it checks for the presence of an Auth header and attempts to validate the token with AWSCognito. Using the groupDiscrimination function, it determines which AWS group(permission) the Cognito user has. it attaches said permission on the request object for further processing.

4. `./plugins/dynamicQueryPlugin.js` receives the request.query object and a valid fastify json schema to create a postgres query dynamically

5. `./plugins/prefferedPool` parses url to forward request either to a streaming postgres pool or a batch postgres pool

6. `./plugins/pgExtenderPlugin` chooses which Postgres pool to instantiate based on JWT token group permission 

7. result set is sent back to user



## Permission strategy: 

- No permissions allowed by default, but if procedure is run on a table and user,
CRNG, Jornada and NWERN records older than 3 years will be allowed by default. 

- NDOW, NWERN (all records), BLM_AIM are privileged values 

### TODO
on PG:
- DONE create new user BLM_NWERN_NDOW etc (combinatorial permutations)
- DONE add new groups to cognito
- DONE use new procedure on each user on each table 
- figure out permissions scheme (if any) on aero_summary

on API:
- DONE add users on the pg pool instantiator
- DONE parsing new groups on the aws plugin
- add schemaplan route (preferrably, automated ingest/deployment after a github commit..)
- maybe: make streaming default, and copy `/api/v1/` url scheme 


- DONE dataDustDeposition only has EstablishDate (dateVisited)
- DONE tblRHEM doesn't have any datde fields (dateVisited)
- DONE dataPlotCharacterization doesn't have any date fields


 1. test time
 2. tables without date fields 
 3. extra/missing features (start/end, like,  tblSchema,aerosummary)


