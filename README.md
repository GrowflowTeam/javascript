# Growflow Graphql Auth
We have two kinds of API authentication for GrowFlow GraphQL APIs:

* Internal Server to Server authentication `serverToServerAuth`
  * Done with secret keys, allows two internal services to talk to eachother
* User to Server authentication `auth0ClientAuth`
  * Done with Auth0 Access Tokens, identifying a specific user for a request
* (FUTURE?) External Server to Growflow authentication
  * Doesn't exist today as of 6/14/2020, but could be used as a basis to allow third parties to access various GrowFlow APIs


# How do I use this?
There are several steps to integrating this library into your GraphqlService.  At a high level it's

1. Install the package
1. Setup secrets installation
1. Add the auth context to the apollo server
1. Add the withAuths wrapper to each resolver that needs it

In more detail it's
1. `npm install @growflow/graphqlauth`
1. Add a new NPM command `getsecrets`
   1.     `"getsecrets": "NODE_ENV=prod GCLOUD_PROJECT=legacy-gateway node node_modules/.bin/getgrowflowsecrets"`
1. Add `context: authContext` to your definition of `ApolloServer`
    ```
    const { authContext } = require('@growflow/graphqlauth');
    const server = new ApolloServer({
        schema: buildFederatedSchema([{ typeDefs, resolvers }]),
        context: authContext,
    });
   ```
1. Add the `withAuths` wrappers as appropriate
    ```
    const { withAuths, serverToServerAuth, auth0ClientAuth } = require('@growflow/graphqlauth');
    retailadmin_getEnvironments: withAuths([auth0ClientAuth, serverToServerAuth])(async (root, { filters }) => {
        ...
    })
    ```



# Configuration
GraphqlAuth will attempt to pull all it's needed secrets from the environment/`.env` file and Google Cloud Secret Manager, in that order.  It is HIGHLY recommended, to avoid any added latency during cold start, to run `getsecrets` as part of your build/deploy process. `getsecrets` will download all needed secrets from Google Secret Manager and save them in a local `.env` file which can then be included in your build artifact.  Do *NOT* check in to source control this `.env` file.

You will need to ensure your build process service acocunt has the IAM Role for Google Cloud Secret Accessor on the `legacy-gateway` project in order to download the secrets.