# Instrucciones para Claude

## Gestión de dependencias
- SIEMPRE usar `yarn` para instalar dependencias, NUNCA `npm`
- Este es un monorepo con Yarn workspaces
- Para instalar en un workspace específico: `yarn workspace @acueducto/podcast add <package>`
- Para instalar en root: `yarn add <package> -W`