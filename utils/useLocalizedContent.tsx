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
  const [content, setContent] = useState<LocalizedContent>(initialContent);

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
      if (locale === initialContent.locale) {
        console.log(
          '[useLocalizedContent] Using initial content - same locale',
        );
        return;
      }

      try {
        console.log(
          `[useLocalizedContent] Loading content for ${locale}/${fileName}`,
        );

        const newContent = await import(
          `public/locales/${locale}/${fileName}.json`
        );

        console.log('[useLocalizedContent] Content loaded successfully');
        console.log('[useLocalizedContent] Contenido cargado:', {
          fileName,
          newContentKeys: Object.keys(newContent || {}),
          newContent,
        });

        setContent(newContent);

        if (onTitleChange) {
          onTitleChange(
            newContent.head?.headerTitle ? newContent.head.headerTitle : '',
          );
        }
      } catch (error) {
        console.error('[useLocalizedContent] Error loading content:', error);
        setContent(initialContent);
      }
    };

    loadLocalizedContent();
  }, [locale, fileName, onTitleChange, initialContent]);

  console.log('[useLocalizedContent] Returning content:', {
    fileName,
    hasContent: !!content,
    contentKeys: Object.keys(content || {}),
    locale,
  });

  return content;
};
