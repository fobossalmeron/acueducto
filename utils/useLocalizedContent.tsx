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
  const [content, setContent] = useState<LocalizedContent>(
    initialContent || {},
  );

  // Función para determinar si estamos en una página que necesita logging detallado
  const shouldShowDetailedLogs = (): boolean => {
    if (typeof window === 'undefined') {
      // En el servidor, asumimos que no necesitamos logs detallados
      return false;
    }

    const path = window.location.pathname;
    return (
      path.includes('/portafolio/') ||
      path.includes('/work/') ||
      path.includes('/recupera')
    );
  };

  // Función para log condicional
  const conditionalLog = (message: string, data?: any) => {
    if (shouldShowDetailedLogs()) {
      if (data) {
        console.log(message, data);
      } else {
        console.log(message);
      }
    }
  };

  // Función para error log (siempre mostramos errores)
  const errorLog = (message: string, error?: any) => {
    if (error) {
      console.error(message, error);
    } else {
      console.error(message);
    }
  };

  // Logging adicional detallado solo si es necesario
  conditionalLog(`[useLocalizedContent] DEBUG - initialContent estructura:`, {
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

  conditionalLog(
    `[useLocalizedContent] Initializing with locale: ${locale}, file: ${fileName}`,
  );
  conditionalLog(`[useLocalizedContent] Estado inicial:`, {
    fileName,
    initialContentKeys: Object.keys(initialContent || {}),
    initialContent,
  });

  useEffect(() => {
    const loadLocalizedContent = async () => {
      if (locale === initialContent?.locale) {
        conditionalLog(
          '[useLocalizedContent] Using initial content - same locale',
        );
        return;
      }

      try {
        conditionalLog(
          `[useLocalizedContent] Loading content for ${locale}/${fileName}`,
        );

        // Debugging temporal - contenido del módulo
        conditionalLog('[useLocalizedContent] DEBUG - Antes de import:', {
          isServer: typeof window === 'undefined',
          path: `public/locales/${locale}/${fileName}.json`,
        });

        const newContent = await import(
          `public/locales/${locale}/${fileName}.json`
        );

        conditionalLog('[useLocalizedContent] Content loaded successfully');
        conditionalLog('[useLocalizedContent] Contenido cargado:', {
          fileName,
          newContentKeys: Object.keys(newContent || {}),
          newContent,
        });

        // Debugging adicional detallado
        conditionalLog('[useLocalizedContent] DEBUG - Después de import:', {
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
        conditionalLog('[useLocalizedContent] DEBUG - Contenido normalizado:', {
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
        // Siempre mostramos errores
        errorLog('[useLocalizedContent] Error loading content:', error);
        errorLog('[useLocalizedContent] DEBUG - Error completo:', {
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
  conditionalLog('[useLocalizedContent] Returning content:', {
    fileName,
    hasContent: !!content,
    contentKeys: Object.keys(content || {}),
    tieneHead: !!content?.head,
    headKeys: content?.head ? Object.keys(content.head) : 'sin head',
    locale,
  });

  return content;
};
