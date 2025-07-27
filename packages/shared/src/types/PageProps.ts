export interface PageProps {
    locale: string;
    setTitle: (title: string) => void;
    pt: Record<string, unknown>;
    hasLoaded: boolean;
}