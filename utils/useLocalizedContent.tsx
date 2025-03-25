import { useState, useEffect } from 'react';

// Definir una interfaz base para el contenido
interface LocalizedContent {
  [key: string]: any;
}

interface UseLocalizedContentProps {
  locale: string;
  fileName: string;
  initialContent: LocalizedContent;
  onTitleChange?: (title: string) => void;
}

export const useLocalizedContent = ({
  locale,
  fileName,
  initialContent,
  onTitleChange,
}: UseLocalizedContentProps): LocalizedContent => {
  // Logging adicional detallado
  console.log(`[useLocalizedContent] DEBUG - initialContent estructura:`, {
    estructura: initialContent ? Object.keys(initialContent) : 'vacío',
    tieneHead: !!initialContent?.head,
    headKeys: initialContent?.head
      ? Object.keys(initialContent.head)
      : 'sin head',
    headValues: initialContent?.head
      ? JSON.stringify(initialContent.head).substring(0, 100) + '...'
      : 'sin valores',
    isDefaultExport: !!initialContent?.default,
    isServer: typeof window === 'undefined',
  });

  const [content, setContent] = useState<LocalizedContent>(
    initialContent || {},
  );

  console.log(
    `[useLocalizedContent] Initializing with locale: ${locale}, file: ${fileName}`,
  );
  console.log(`[useLocalizedContent] Estado inicial:`, {
    fileName,
    initialContentKeys: Object.keys(initialContent || {}),
    initialContent,
  });

  useEffect(() => {
    const loadLocalizedContent = async () => {
      if (locale === initialContent?.locale) {
        console.log(
          '[useLocalizedContent] Using initial content - same locale',
        );
        return;
      }

      try {
        console.log(
          `[useLocalizedContent] Loading content for ${locale}/${fileName}`,
        );

        // Debugging temporal - contenido del módulo
        console.log('[useLocalizedContent] DEBUG - Antes de import:', {
          isServer: typeof window === 'undefined',
          path: `public/locales/${locale}/${fileName}.json`,
        });

        const newContent = await import(
          `public/locales/${locale}/${fileName}.json`
        );

        console.log('[useLocalizedContent] Content loaded successfully');
        console.log('[useLocalizedContent] Contenido cargado:', {
          fileName,
          newContentKeys: Object.keys(newContent || {}),
          newContent,
        });

        // Debugging adicional detallado
        console.log('[useLocalizedContent] DEBUG - Después de import:', {
          isModule: typeof newContent === 'object',
          hasDefault: 'default' in newContent,
          defaultKeys: newContent.default
            ? Object.keys(newContent.default)
            : 'sin default',
          contentType: Object.prototype.toString.call(newContent),
          directKeys: Object.keys(newContent),
        });

        // Normalizar el contenido para garantizar consistencia
        const normalizedContent = {
          ...initialContent, // Mantener estructura base
          ...(newContent.default || newContent), // Manejar posible exportación default
        };

        // Verificación de estructura
        console.log('[useLocalizedContent] DEBUG - Contenido normalizado:', {
          hasHead: !!normalizedContent.head,
          headKeys: normalizedContent.head
            ? Object.keys(normalizedContent.head)
            : 'sin head',
          contentKeys: Object.keys(normalizedContent),
        });

        setContent(normalizedContent);

        if (onTitleChange) {
          onTitleChange(
            normalizedContent.head?.headerTitle
              ? normalizedContent.head.headerTitle
              : '',
          );
        }
      } catch (error) {
        console.error('[useLocalizedContent] Error loading content:', error);
        console.error('[useLocalizedContent] DEBUG - Error completo:', {
          mensaje: error.message,
          stack: error.stack,
          fileName,
          locale,
        });
        setContent(initialContent || {});
      }
    };

    loadLocalizedContent();
  }, [locale, fileName, onTitleChange, initialContent]);

  // Logging adicional al final
  console.log('[useLocalizedContent] Returning content:', {
    fileName,
    hasContent: !!content,
    contentKeys: Object.keys(content || {}),
    tieneHead: !!content?.head,
    headKeys: content?.head ? Object.keys(content.head) : 'sin head',
    locale,
  });

  return content;
};
