const prismic = require('@prismicio/client');

exports.repositoryName = 'acueductostudio';
const endpoint = prismic.getRepositoryEndpoint(exports.repositoryName);

exports.createClient = () => {
  const client = prismic.createClient(endpoint);
  return client;
};
