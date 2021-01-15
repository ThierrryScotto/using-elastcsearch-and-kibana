'use strict';

require('dotenv').config();

// dependencies
const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: process.env.ELASTICSEARCH_HOST,
  log: 'trace',
  apiVersion: '7.2', // use the same version of your Elasticsearch instance
});

module.exports = client;