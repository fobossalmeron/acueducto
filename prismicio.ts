import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export const repositoryName = 'acueductostudio';
const endpoint = prismic.getRepositoryEndpoint(repositoryName);

export const createClient = (config: { previewData?: any } = {}) => {
  const client = prismic.createClient(endpoint);

  if (config.previewData) {
    enableAutoPreviews({ client, previewData: config.previewData });
  }

  return client;
}