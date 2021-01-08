// this is needed for graphql-query-test-mock used for mocking graphql-request
// https://github.com/zth/graphql-query-test-mock
global.fetch = require('node-fetch');
