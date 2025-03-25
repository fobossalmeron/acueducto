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

  useEffect(() => {
    console.log(
      `[useLocalizedContent] Initializing with locale: ${locale}, file: ${fileName}`,
    );

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

        if (!newContent || Object.keys(newContent).length === 0) {
          console.error('[useLocalizedContent] Content is empty or invalid');
          setContent(initialContent);
          return;
        }

        console.log('[useLocalizedContent] Content loaded successfully');
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

  return content;
};
