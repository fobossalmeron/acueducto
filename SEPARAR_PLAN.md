# Plan de Separación: Podcast "Cuando el río suena"

## Objetivo
Separar el podcast del sitio principal usando Turborepo + Yarn Workspaces para resolver builds lentos (5+ minutos) debido a 200+ episodios.

## Estructura Final
```
acueducto/
├── package.json                     # Workspace raíz
├── turbo.json                       # Configuración Turborepo
├── apps/
│   ├── studio/                      # Sitio del estudio (sin podcast)
│   │   ├── package.json
│   │   ├── next.config.js
│   │   ├── pages/
│   │   └── vercel.json
│   └── podcast/                     # App independiente del podcast
│       ├── package.json
│       ├── next.config.js
│       ├── pages/
│       ├── _episodios/
│       ├── public/
│       ├── prismicio.ts
│       ├── customtypes/
│       ├── slicemachine.config.json
│       └── vercel.json
└── packages/
    └── shared/                      # Componentes compartidos
        ├── package.json
        ├── src/
        │   ├── components/
        │   ├── utils/
        │   ├── styles/
        │   └── types/
        └── dist/
```

## Archivos de Configuración Requeridos

### 1. Workspace raíz: `package.json`
```json
{
  "name": "acueducto-monorepo",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "dev:studio": "turbo dev --filter=@acueducto/studio",
    "dev:podcast": "turbo dev --filter=@acueducto/podcast",
    "build:studio": "turbo build --filter=@acueducto/studio",
    "build:podcast": "turbo build --filter=@acueducto/podcast",
    "lint": "turbo lint",
    "clean": "turbo clean",
    "slicemachine": "yarn workspace @acueducto/podcast slicemachine"
  },
  "devDependencies": {
    "turbo": "^2.3.3"
  },
  "packageManager": "yarn@4.7.0"
}
```

### 2. Turborepo: `turbo.json`
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"],
      "env": ["NODE_ENV", "NEXT_PUBLIC_*", "PRISMIC_*"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"],
      "outputs": []
    },
    "clean": {
      "cache": false
    }
  }
}
```

### 3. Paquete compartido: `packages/shared/package.json`
```json
{
  "name": "@acueducto/shared",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc && cp -r src/styles dist/",
    "dev": "tsc --watch"
  },
  "dependencies": {
    "react": "^19.0.0",
    "styled-components": "^6.1.16",
    "next": "^15.2.4"
  }
}
```

### 4. App Studio: `apps/studio/package.json`
```json
{
  "name": "@acueducto/studio",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next"
  },
  "dependencies": {
    "@acueducto/shared": "*",
    "@next/third-parties": "^15.2.4",
    "@tailwindcss/postcss": "^4.0.17",
    "next": "^15.2.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "styled-components": "^6.1.16",
    "tailwindcss": "^4.0.17"
  }
}
```

### 5. App Podcast: `apps/podcast/package.json`
```json
{
  "name": "@acueducto/podcast",
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next"
  },
  "dependencies": {
    "@acueducto/shared": "*",
    "@prismicio/client": "^7.17.0",
    "@prismicio/helpers": "^2.3.9",
    "@prismicio/next": "^1.7.2",
    "@prismicio/react": "^3.2.0",
    "gray-matter": "^4.0.3",
    "next": "^15.2.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1",
    "styled-components": "^6.1.16",
    "swr": "^2.3.3"
  },
  "devDependencies": {
    "@slicemachine/adapter-next": "^0.3.72",
    "slice-machine-ui": "^2.14.2"
  }
}
```

## Migración de Archivos

### A paquete compartido (`packages/shared/src/`):
- `components/layout/Layout.tsx`
- `components/layout/Nav/`
- `components/layout/Head/`
- `components/layout/PageWrapper.tsx`
- `components/layout/footers/`
- `components/ui/Button/`
- `components/ui/Header.tsx`
- `components/ui/Title.tsx`
- `components/ui/Icons.tsx`
- `components/ui/Hamburger.tsx`
- `components/shared/`
- `utils/LangContext.ts`
- `utils/LenisContext.tsx`
- `utils/facebookPixel.ts`
- `utils/useIsMobile.ts`
- `styles/theme.ts`
- `styles/global.js`
- `styles/globals.css`
- `types/`

### A app del estudio (`apps/studio/`):
Todo el contenido actual EXCEPTO:
- `pages/podcast/`
- `components/pages/podcast/`
- `_episodios/`
- `public/assets/img/podcast/`
- `public/assets/img/og/og_image_e*.png`
- Archivos de Prismic

### A app del podcast (`apps/podcast/`):
- `pages/podcast/` → `pages/`
- `components/pages/podcast/` → `components/pages/`
- `_episodios/`
- `public/assets/img/podcast/` → `public/assets/img/`
- `public/assets/img/og/og_image_e*.png` → `public/assets/img/og/`
- `utils/podcastApi.ts`
- `prismicio.ts`
- `customtypes/`
- `slicemachine.config.json`
- `prismicio-types.d.ts`

## Configuración Next.js

### Studio (`apps/studio/next.config.js`):
```js
// No rewrites needed - handled at Vercel CDN level
module.exports = {}
```

### Podcast (`apps/podcast/next.config.js`):
```js
// No redirects needed - app only serves content via Vercel rewrites
module.exports = {}
```

## Configuración Vercel

### Proyecto Studio:
- **Name**: `acueducto-studio`
- **Root Directory**: `apps/studio`
- **Build Command**: `cd ../.. && turbo build --filter=@acueducto/studio`
- **Domain**: `acueducto.studio`
- **Vercel Rewrites** (`vercel.json`):
```json
{
  "rewrites": [
    {
      "source": "/podcast",
      "destination": "https://cuandoelriosuena.vercel.app"
    },
    {
      "source": "/podcast/(.*)",
      "destination": "https://cuandoelriosuena.vercel.app/$1"
    }
  ]
}
```

### Proyecto Podcast:
- **Name**: `cuandoelriosuena`
- **Root Directory**: `apps/podcast`
- **Build Command**: `cd ../.. && turbo build --filter=@acueducto/podcast`
- **Domain**: `cuandoelriosuena.vercel.app` (auto-generated, NO custom domain)
- **Function**: Sirve contenido solo via rewrites del studio project

## Pasos de Implementación

1. Crear estructura de directorios
2. Configurar package.json raíz con workspaces
3. Crear packages/shared/package.json
4. Migrar componentes compartidos a packages/shared/
5. Crear apps/studio/ moviendo código sin podcast
6. Crear apps/podcast/ con páginas específicas
7. Actualizar imports para usar @acueducto/shared
8. Configurar next.config.js de cada app
9. Migrar assets específicos
10. Migrar configuración Prismic a podcast
11. Configurar TypeScript y builds
12. Crear archivos de configuración Vercel

## Comandos Post-Migración

```bash
# Desarrollo
yarn dev                            # Ambas apps
yarn dev:studio                     # Solo studio
yarn dev:podcast                    # Solo podcast

# Builds
yarn build                          # Todo
yarn build:studio                   # Solo studio
yarn build:podcast                  # Solo podcast

# Limpieza
yarn clean                          # Cache Turborepo

# Prismic
yarn slicemachine                   # Solo podcast
```