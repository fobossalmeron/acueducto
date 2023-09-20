const prismic = require('@prismicio/client');
const { enableAutoPreviews } = require('@prismicio/next');

exports.repositoryName = 'acueductostudio';
const endpoint = prismic.getRepositoryEndpoint(exports.repositoryName);

exports.createClient = ({ previewData }) => {
  const client = prismic.createClient(endpoint);

  enableAutoPreviews({ client, previewData });

  return client;
};