REVISA SI HAY UN LOOP INFINITO

# PRD: Separación del Podcast "Cuando el río suena"

## **Problema a Resolver**

### **Performance Issues**

- **Builds lentos**: 5+ minutos debido a 200+ episodios con markdown, imágenes y Open Graph
- **Desarrollo lento**: Hot reload afectado por el volumen de contenido del podcast
- **Deploy innecesario**: Cambios al sitio principal rebuildan todo el podcast

### **Arquitectura Actual**

```
acueducto/
├── pages/podcast/           # 3 páginas del podcast
├── _episodios/             # 200+ archivos markdown
├── public/assets/img/podcast/  # 200+ imágenes episodios
├── public/assets/img/og/    # 200+ imágenes Open Graph
└── components/pages/podcast/   # Componentes específicos
```

### **Impacto del Problema**

- **Desarrollo**: Ciclos lentos afectan productividad
- **CI/CD**: Builds costosos en tiempo y recursos
- **Deploys**: Riesgo innecesario en cambios simples del sitio

## **Solución Propuesta**

### **Arquitectura Objetivo: Monorepo con Turborepo + Yarn Workspaces**

**¿Por qué esta solución?**

- **Turborepo**: Cache inteligente, builds paralelos, usado por Vercel/Next.js
- **Yarn Workspaces**: Gestión de dependencias, linking automático
- **Separación física**: Apps independientes que comparten componentes

### **Estructura Final**

```
acueducto/
├── apps/
│   ├── studio/              # Sitio principal (sin podcast)
│   └── podcast/             # App independiente del podcast
└── packages/
    └── shared/              # Componentes compartidos
```

## **Beneficios Esperados**

### **Performance**

- **Studio builds**: ~1 minuto (vs 5+ actuales)
- **Podcast builds**: Tiempo actual pero independiente
- **Cache inteligente**: Solo rebuilds lo que cambió
- **Deploys paralelos**: Studio y podcast independientes

### **Desarrollo**

- **Hot reload rápido**: Sin carga de 200 episodios en studio
- **Aislamiento**: Cambios en uno no afectan el otro
- **Componentes compartidos**: UI consistente automática

### **SEO Strategy: Hybrid Approach**

- **cuandoelriosuena.com** → 301 redirects → **acueducto.studio/podcast**
- **acueducto.studio/podcast** → rewrites → contenido de cuandoelriosuena.com
- **Resultado**: Link equity consolidado + ambos dominios funcionan

## **Contexto Técnico**

### **Stack Actual**

- **Framework**: Next.js 15+ con React 19
- **Styling**: Styled Components + TailwindCSS
- **CMS**: Prismic (solo para podcast)
- **Content**: Markdown files para episodios
- **Deploy**: Vercel

### **Análisis de Dependencias**

#### **Componentes Compartidos Identificados:**

- **Layout**: `Layout.tsx`, `Nav`, `Header`, `Footer`
- **UI**: `Button`, `Title`, `Icons`, `Hamburger`
- **Utils**: `LangContext`, `LenisContext`, analytics
- **Styles**: `theme.ts`, `global.js`, styled-components

#### **Específicos del Podcast:**

- **Prismic**: Solo el podcast usa CMS
- **Content processing**: Markdown + remark
- **Assets**: 200+ imágenes y OG images

#### **Específicos del Studio:**

- **TailwindCSS**: Solo el sitio principal
- **Analytics**: Facebook Pixel, Google Analytics

## **Arquitectura Detallada**

### **Estructura del Monorepo**

```
acueducto/
├── package.json                     # Workspace raíz + Turborepo
├── turbo.json                       # Config cache y pipeline
├── apps/
│   ├── studio/                      # acueducto.studio
│   │   ├── pages/                   # Homepage, portafolio, contacto
│   │   ├── next.config.js           # Rewrites a podcast app
│   │   └── vercel.json              # Deploy config
│   └── podcast/                     # cuandoelriosuena.com
│       ├── pages/                   # Landing, episodios, [slug]
│       ├── _episodios/              # 200+ markdown files
│       ├── public/assets/           # Imágenes específicas
│       ├── prismicio.ts             # Config CMS
│       ├── next.config.js           # Redirects 301
│       └── vercel.json              # Deploy config
└── packages/
    └── shared/                      # @acueducto/shared
        ├── src/
        │   ├── components/          # Layout, UI, etc
        │   ├── utils/               # Contexts, hooks
        │   ├── styles/              # Theme, globals
        │   └── types/               # TypeScript
        └── dist/                    # Build output
```

### **Deployment Strategy**

#### **Dominios y Routing**

1. **acueducto.studio** (Studio App)
   - Contenido principal del sitio
   - `/podcast/*` → rewrite via Vercel CDN a `cuandoelriosuena.vercel.app`
2. **cuandoelriosuena.vercel.app** (Podcast App)
   - Sirve contenido solo via rewrites del studio project
   - NO dominio público asignado

#### **Proyectos Vercel**

- **acueducto-studio**: `apps/studio/` → `acueducto.studio`
- **cuandoelriosuena**: `apps/podcast/` → `cuandoelriosuena.vercel.app`

## **Justificación Técnica**

### **¿Por qué Monorepo vs Repositories Separados?**

#### **Ventajas del Monorepo:**

- **Componentes compartidos**: Automático via `@acueducto/shared`
- **Consistent dependencies**: Una sola `yarn install`
- **Atomic changes**: Cambios en shared + apps en un solo commit
- **Build optimization**: Cache inteligente solo rebuilds lo necesario

#### **Alternativas Descartadas:**

- **Git submodules**: Complejo, sync manual, no atomic changes
- **NPM packages**: Overhead de versioning, publish, CI/CD
- **Code duplication**: Divergencia de UI, mantenimiento doble

### **Turborepo + Yarn Workspaces**

- **Yarn**: Manejo de dependencias y linking automático
- **Turborepo**: Cache inteligente y paralelización de builds
- **Industry standard**: Usado por Vercel, Next.js, Remix

## **Riesgos y Mitigaciones**

### **Riesgos Técnicos**

- **Complejidad inicial**: Configuración monorepo + nuevas herramientas
  - _Mitigación_: Documentación detallada, implementación gradual
- **Shared components breaking**: Cambios pueden afectar ambas apps
  - _Mitigación_: Versionado semántico, testing automático
- **Build cache issues**: Turborepo cache puede corromperse
  - _Mitigación_: Scripts `turbo clean`, `.gitignore` apropiado

### **Riesgos de Deployment**

- **Vercel configuration**: Nuevos build commands pueden fallar
  - _Mitigación_: Testing en staging, rollback plan
- **Domain routing**: Redirects/rewrites mal configurados
  - _Mitigación_: Testing exhaustivo de rutas, monitoreo

### **Riesgos SEO**

- **Redirect loops**: Entre cuandoelriosuena.com y acueducto.studio
  - _Mitigación_: Configuración específica, testing manual
- **Performance regression**: Rewrites pueden añadir latencia
  - _Mitigación_: Headers de cache, monitoreo performance

## **Success Metrics**

### **Performance Targets**

- **Studio build time**: <60 segundos (vs 300+ actual)
- **Development**: Hot reload <3 segundos
- **Deploy independence**: Cambios studio no triggean podcast build

### **Quality Gates**

- **Shared components**: 100% usage en ambas apps
- **SEO**: No pérdida de rankings durante transición
- **UX**: Ambos dominios funcionando sin broken links

## **Plan de Implementación**

### **Fase 1: Setup Infrastructure (Agente)**

1. Crear estructura monorepo con directorios
2. Configurar workspace packages (`package.json`, `turbo.json`)
3. Setup `packages/shared` con TypeScript config

### **Fase 2: Migrate Shared Components (Agente)**

1. Migrar layout components a `packages/shared`
2. Migrar UI components (Button, Icons, etc)
3. Migrar utilities (contexts, hooks)
4. Migrar styles (theme, globals)

### **Fase 3: Create Apps (Agente)**

1. Crear `apps/studio` sin código podcast
2. Crear `apps/podcast` con páginas específicas
3. Migrar assets y episodios markdown
4. Configurar imports `@acueducto/shared`

### **Fase 4: Configuration (Agente)**

1. Setup Next.js configs (redirects/rewrites)
2. Migrar configuración Prismic solo a podcast
3. Configurar Vercel configs para deployment
4. Update scripts de desarrollo

### **Fase 5: Testing & Deployment (Usuario)**

1. Local testing de ambas apps
2. Crear proyectos Vercel
3. Configurar dominios y DNS
4. Monitoring y performance validation

## **Resultados Esperados**

### **Performance Improvements**

- **Build time studio**: 60s vs 300s actuales (80% reduction)
- **Development experience**: Hot reload <3s
- **Independent deploys**: Cambios aislados sin cross-contamination
- **Cache efficiency**: Rebuilds solo componentes modificados

### **Developer Experience**

- **Simplified commands**: `yarn dev:studio` vs `yarn dev:podcast`
- **Shared components**: Automático sync de UI/branding
- **Prismic isolation**: Complejidad CMS solo en podcast
- **Scalability**: Ready para futuras apps (blog, tools, etc)

### **SEO & UX Continuity**

- **Zero downtime**: Migración transparente
- **Link equity preservation**: 301 redirects consolidan autoridad
- **Domain flexibility**: Ambas URLs funcionan
- **Performance boost**: Sitios más rápidos = mejor SEO

---

## **Referencias Técnicas**

### **Comandos Post-Migración**

```bash
# Development
yarn dev                     # Ambas apps
yarn dev:studio             # Solo acueducto.studio
yarn dev:podcast            # Solo podcast

# Production builds
yarn build                  # Cache-optimized builds
yarn build:studio           # Studio independiente
yarn build:podcast          # Podcast independiente

# Maintenance
yarn clean                  # Limpiar Turborepo cache
yarn slicemachine          # Prismic Slice Machine
```

### **Vercel Configuration**

- **Studio**: `apps/studio/` → `acueducto.studio`
  - **Vercel Rewrites**: `/podcast/*` → `cuandoelriosuena.vercel.app/*`
- **Podcast**: `apps/podcast/` → `cuandoelriosuena.vercel.app`
  - **Function**: Solo sirve contenido via rewrites (NO dominio público)
- **Build commands**: `turbo build --filter=@acueducto/{app}`

### **Configuración Vercel CDN**

**Studio Project** (`vercel.json`):
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

Este PRD define la estrategia completa para resolver los problemas de performance manteniendo continuidad de negocio y SEO.
