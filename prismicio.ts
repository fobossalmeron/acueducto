import * as prismic from '@prismicio/client';

export const repositoryName = 'acueductostudio';
const endpoint = prismic.getRepositoryEndpoint(repositoryName);

export const createClient = () => {
  const client = prismic.createClient(endpoint);
  return client;
}