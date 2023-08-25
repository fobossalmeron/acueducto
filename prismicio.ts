import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export const repositoryName = 'acueductostudio';
const endpoint = prismic.getRepositoryEndpoint(repositoryName);

export const createClient = ({ previewData }) => {
  const client = prismic.createClient(endpoint);

  enableAutoPreviews({ client, previewData });

  return client;
}
