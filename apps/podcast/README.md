# Podcast - Cuando el río suena

## Descripción del Proyecto

Esta aplicación es el sitio web oficial del podcast "Cuando el río suena" de Acueducto Studio. Es una plataforma web desarrollada con Next.js que permite a los usuarios explorar, escuchar y suscribirse al contenido del podcast de negocios y productos digitales.

## Funcionalidades Principales

### 1. Sistema de Suscripción al Newsletter
- **Integración con Brevo**: El proyecto incluye un sistema completo de suscripción al newsletter que permite a los usuarios registrarse para recibir actualizaciones del podcast
- **Formularios de suscripción**: Disponibles tanto en el header como en el footer de la página principal
- **Tracking de conversiones**: Integrado con Facebook Pixel para seguimiento de suscripciones
- **Gestión de contactos**: Los suscriptores se almacenan automáticamente en listas de Brevo con atributos personalizados

### 2. Integración con Prismic CMS
- **Conexión robusta**: Configurada con reintentos automáticos y timeouts para garantizar la disponibilidad del contenido
- **Renderizado dinámico**: Todas las páginas del podcast se generan dinámicamente a partir del contenido almacenado en Prismic
- **Gestión de episodios**: Los episodios se obtienen, ordenan y presentan automáticamente desde Prismic
- **Contenido estructurado**: Utiliza custom types de Prismic para mantener la consistencia del contenido

### 3. Arquitectura de Tres Páginas Principales

#### Página de Landing (`/`)
- Página principal del podcast con introducción, episodios destacados y formularios de suscripción
- Presenta los episodios más escuchados y el último episodio publicado
- Incluye información sobre los hosts y llamadas a la acción para suscribirse

#### Páginas de Episodios Individuales (`/[slug]`)
- Páginas dedicadas para cada episodio del podcast
- Contenido completo del episodio renderizado desde Prismic
- Metadatos SEO optimizados para cada episodio
- Integración con reproductores de audio

#### Página de Búsqueda y Listado (`/episodios`)
- Sistema de búsqueda y filtrado de episodios por categorías
- Paginación para navegar entre todos los episodios
- Filtros por categorías: founder, producto, inversor, growth, desarrollo, innovación, operador, people
- Búsqueda en tiempo real con debounce para optimizar rendimiento

### 4. Configuración Exclusiva en Español
- **Localización completa**: Todo el contenido está configurado para ser mostrado únicamente en español
- **Archivos de traducción**: Utiliza archivos JSON estructurados para gestionar todos los textos de la interfaz
- **SEO optimizado**: Metadatos y URLs configurados específicamente para audiencia hispanohablante
- **Contenido localizado**: Todas las páginas generadas están optimizadas para el mercado en español

## Tecnologías Utilizadas

- **Next.js 15**: Framework principal para el desarrollo de la aplicación
- **Prismic CMS**: Sistema de gestión de contenido headless
- **Tailwind CSS 4**: Framework de estilos utilitarios
- **Styled Components**: Para componentes con estilos más complejos
- **TypeScript**: Para tipado estático y mejor experiencia de desarrollo
- **SWR**: Para fetching de datos y cache optimizado
- **Brevo**: Para gestión de newsletter y contactos

## Estructura del Proyecto

```
apps/podcast/
├── components/          # Componentes React específicos del podcast
├── pages/              # Páginas de Next.js (landing, episodios, búsqueda)
├── public/locales/     # Archivos de localización en español
├── styles/             # Estilos globales y configuración de Tailwind
├── utils/              # Utilidades para API de Prismic y funciones auxiliares
└── customtypes/        # Definiciones de tipos personalizados de Prismic
```

Este proyecto forma parte del ecosistema de aplicaciones de Acueducto Studio y está diseñado para ofrecer una experiencia completa de consumo de contenido de podcast, desde la descubribilidad hasta la suscripción al newsletter.
