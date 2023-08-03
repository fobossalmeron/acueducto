import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'

const repositoryName = 'acueductostudio'
const endpoint = prismic.getRepositoryEndpoint(repositoryName)

export const createClient = ({ req, previewData }) => {
  const client = prismic.createClient(endpoint)

  enableAutoPreviews({ client, req, previewData })

  return client
}
