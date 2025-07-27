interface LocalizedContent {
    [key: string]: any;
}
interface UseLocalizedContentProps {
    locale: string;
    fileName: string;
    initialContent: LocalizedContent;
    onTitleChange?: (title: string) => void;
}
export declare const useLocalizedContent: ({ locale, fileName, initialContent, onTitleChange, }: UseLocalizedContentProps) => LocalizedContent;
export {};
//# sourceMappingURL=useLocalizedContent.d.ts.map