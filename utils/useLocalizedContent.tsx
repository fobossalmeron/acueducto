import { useState, useEffect } from "react";

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
}: UseLocalizedContentProps) => {
  const [content, setContent] = useState<LocalizedContent>(initialContent);

  useEffect(() => {
    const loadLocalizedContent = async () => {
      try {
        const newContent = await import(`public/locales/${locale}/${fileName}.json`);
        setContent(newContent);
        if (onTitleChange) {
          onTitleChange(
            newContent.head?.headerTitle ? newContent.head.headerTitle : ""
          );
        }
      } catch (error) {
        console.error(`Error loading localized content: ${error}`);
        // Optionally, you could set some default content or show an error message
      }
    };

    loadLocalizedContent();
  }, [locale, fileName, onTitleChange]);

  return content;
};