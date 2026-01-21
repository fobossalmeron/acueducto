# Actividad de Migración: Separación Studio/Podcast

## Proceso Actual

Estamos resolviendo imports rotos durante la migración del monorepo. El criterio para decidir dónde ubicar componentes es:

### Criterio de Decisión

**¿El componente se usa en ambas apps (studio Y podcast)?**
- ✅ **SÍ** → Debe estar en `packages/shared/src/`
- ❌ **NO** → Debe quedarse en la app local (`apps/studio/` o `apps/podcast/`)

### Flujo de Trabajo

1. **Detectar import roto**: Error de compilación indica que un módulo no se encuentra
2. **Buscar uso en ambas apps**: Verificar si el componente/archivo se usa en:
   - `apps/studio/`
   - `apps/podcast/`
3. **Decidir ubicación**:
   - Si se usa en ambas → Mover a `packages/shared/src/` y actualizar imports
   - Si solo se usa en una app → Cambiar import a ruta relativa en esa app
4. **Solicitar confirmación**: SIEMPRE pedir confirmación del usuario antes de mover archivos
5. **Aplicar cambio**: Una vez confirmado, hacer el cambio

### Ejemplo Reciente

**Caso**: `ContactForm` en `apps/studio/pages/contacto.tsx` importaba desde `@acueducto/shared`

**Análisis**: 
- ❌ No se usa en `apps/podcast/`
- ✅ Solo se usa en `apps/studio/`

**Solución**: Cambiar import a ruta relativa `../components/pages/contacto/ContactForm`

### Notas Importantes

- **Siempre pedir confirmación** antes de mover archivos entre apps y shared
- Verificar dependencias: Si un componente local usa componentes de shared, esos imports deben apuntar a `@acueducto/shared`
- Mantener estructura de carpetas consistente en shared
