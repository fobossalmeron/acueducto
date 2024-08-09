import { useState, useEffect } from "react";
import clientLocale from "utils/clientLocale";

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
    clientLocale({
      locale,
      fileName,
      callBack: (newContent: LocalizedContent) => {
        setContent(newContent);
        if (onTitleChange) {
          onTitleChange(
            newContent.head.headerTitle ? newContent.head.headerTitle : ""
          );
        }
      },
    });
  }, [locale, fileName, onTitleChange]);

  return content;
};
