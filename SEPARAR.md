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
- **Assets optimizados**: Gestión centralizada y distribución automática

## **Contexto Técnico**

### **Stack Actual**

- **Framework**: Next.js 15+ con React 19
- **Styling**: Styled Components + TailwindCSS
- **CMS**: Prismic (solo para podcast)
- **Content**: Markdown files para episodios
- **Deploy**: Vercel

#### **Específicos del Studio:**

- **TailwindCSS**: Solo el sitio principal
- **Analytics**: Facebook Pixel, Google Analytics (@next/third-parties/google)

## **Arquitectura Detallada**

### **Estructura del Monorepo**

#### **Proyectos Vercel**

- **acueducto-studio**: `apps/studio/` → `acueducto.studio`
- **cuandoelriosuena**: `apps/podcast/` → `cuandoelriosuena.vercel.app`

### **Turborepo + Yarn Workspaces**

- **Yarn**: Manejo de dependencias y linking automático
- **Turborepo**: Cache inteligente y paralelización de builds
- **Industry standard**: Usado por Vercel, Next.js, Remix
