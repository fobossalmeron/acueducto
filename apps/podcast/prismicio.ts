import * as prismic from '@prismicio/client';

export const repositoryName = 'acueductostudio';
const endpoint = prismic.getRepositoryEndpoint(repositoryName);

// Función de fetch con reintentos
async function fetchWithRetry(url, options = {}, retries = 3, backoff = 1000) {
  try {
    return await fetch(url, {
      ...options,
      signal: AbortSignal.timeout(90000) // 90 segundos
    });
  } catch (err) {
    if (retries <= 1) throw err;

    console.log(`Error en fetch, reintentando en ${backoff}ms... (${retries - 1} intentos restantes)`);
    await new Promise(resolve => setTimeout(resolve, backoff));

    return fetchWithRetry(
      url,
      options,
      retries - 1,
      backoff * 2
    );
  }
}

export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch: fetchWithRetry
  });

  return client;
}