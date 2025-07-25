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
│   │   ├── postcss.config.mjs
│   │   ├── tsconfig.json
│   │   ├── pages/
│   │   └── vercel.json
│   └── podcast/                     # App independiente del podcast
│       ├── package.json
│       ├── next.config.js
│       ├── tsconfig.json
│       ├── pages/
│       ├── _episodios/
│       ├── public/
│       ├── prismicio.ts
│       ├── customtypes/
│       ├── slicemachine.config.json
│       └── vercel.json
└── packages/
    ├── shared/                      # Componentes compartidos
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── src/
    │   │   ├── components/
    │   │   ├── utils/
    │   │   ├── styles/
    │   │   ├── types/
    │   │   └── assets/              # Assets compartidos
    │   │       ├── images/
    │   │       ├── icons/
    │   │       └── fonts/
    │   └── dist/
    └── typescript-config/           # Configuración TypeScript compartida
        ├── package.json
        ├── base.json
        └── nextjs.json
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
  "tasks": {
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
  "exports": {
    "./*": {
      "types": "./dist/*.d.ts",
      "default": "./dist/*.js"
    }
  },
  "scripts": {
    "build": "tsc && cp -r src/styles dist/ && npm run copy-assets",
    "dev": "tsc --watch",
    "copy-assets": "mkdir -p ../../apps/studio/public/shared ../../apps/podcast/public/shared && cp -r src/assets/* ../../apps/studio/public/shared/ && cp -r src/assets/* ../../apps/podcast/public/shared/"
  },
  "dependencies": {
    "react": "^19.0.0",
    "next": "^15.2.4",
    "styled-components": "^6.1.16",
    "tailwindcss": "^4.0.17"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "latest"
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
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest"
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
    "tailwindcss": "^4.0.17",
    "swr": "^2.3.3"
  },
  "devDependencies": {
    "@slicemachine/adapter-next": "^0.3.72",
    "slice-machine-ui": "^2.14.2",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest"
  }
}
```

### 6. Configuración TypeScript Shared: `packages/shared/tsconfig.json`

```json
{
  "extends": "@acueducto/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "declaration": true,
    "declarationMap": true
  },
  "include": ["src"],
  "exclude": ["dist", "node_modules"]
}
```

### 7. Configuración PostCSS Studio: `apps/studio/postcss.config.mjs`

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### 8. Configuración TypeScript Apps: `apps/studio/tsconfig.json` y `apps/podcast/tsconfig.json`

```json
{
  "extends": "next/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 9. Configuración TypeScript Base: `packages/typescript-config/package.json`

```json
{
  "name": "@acueducto/typescript-config",
  "version": "1.0.0",
  "main": "index.js",
  "files": ["base.json", "nextjs.json"],
  "devDependencies": {
    "typescript": "latest"
  }
}
```

### 10. Base TypeScript Config: `packages/typescript-config/base.json`

```json
{
  "compilerOptions": {
    "target": "es2022",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": false,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
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
- **Assets compartidos** → `src/assets/`:
  - `public/assets/img/layout/` (logos, iconos de UI)
  - `public/assets/img/shared/` (imágenes usadas en ambas apps)
  - `public/fonts/` (fuentes del proyecto)

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
module.exports = {};
```

### Podcast (`apps/podcast/next.config.js`):

```js
// No redirects needed - app only serves content via Vercel rewrites
module.exports = {};
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
3. Crear packages/typescript-config/ con configuración base
4. Crear packages/shared/package.json y tsconfig.json
5. Migrar componentes compartidos a packages/shared/
6. Crear apps/studio/ con tsconfig.json y postcss.config.mjs
7. Crear apps/podcast/ con tsconfig.json  
8. Mover código sin podcast a studio/
9. Mover código específico de podcast a podcast/
10. Actualizar imports para usar @acueducto/shared con export maps
11. Configurar next.config.js de cada app
12. Migrar assets compartidos a packages/shared/src/assets/
13. Migrar assets específicos a cada app
14. Migrar configuración Prismic a podcast
15. Configurar Google Analytics usando @next/third-parties/google en Layout.tsx compartido
16. Configurar y testear builds de TypeScript
17. Crear archivos de configuración Vercel

## Gestión de Dependencias

### **Arquitectura de Dependencias**

**Regla Fundamental**: Flujo unidireccional
```
Apps (studio/podcast) → Shared Package → External Dependencies
```

### **Configuración de Dependencias**

- ✅ **Apps declaran todas sus dependencias**: React, Next.js, styled-components, TailwindCSS
- ✅ **Shared declara todas sus dependencias**: Mismas librerías que las apps
- ✅ **Yarn Workspaces optimiza automáticamente**: Hoisting en `node_modules` raíz
- ❌ **Shared NUNCA importa de apps**: Solo de dependencias externas

### **Resolución de Imports**

- ✅ **Export maps en shared**: Apuntan a `dist/` para consistencia dev/prod
- ✅ **Sin path mapping**: TypeScript usa export maps automáticamente
- ✅ **Imports específicos**: `@acueducto/shared/components/Button`

### **Gestión de Assets Compartidos**

- ✅ **Ubicación centralizada**: `packages/shared/src/assets/`
- ✅ **Copia automática**: Build script distribuye a `apps/*/public/shared/`
- ✅ **Referencias consistentes**: Componentes usan `/shared/images/logo.png`
- ✅ **Desarrollo automático**: Turborepo ejecuta `shared:build` antes de `dev`

### **Prevención de Dependencias Circulares**

```json
// packages/shared/.eslintrc.json
{
  "rules": {
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@acueducto/studio*", "@acueducto/podcast*"]
      }
    ]
  }
}
```

### **Optimización de Yarn**

```
node_modules/
├── react@19.0.0          # Compartido (hoisted)
├── next@15.2.4           # Compartido (hoisted)
├── styled-components@6.1.16  # Compartido (hoisted)
└── tailwindcss@4.0.17    # Compartido (hoisted)
```

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
