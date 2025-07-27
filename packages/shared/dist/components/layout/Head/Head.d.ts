export type HeadProps = {
    title: string;
    description: string;
    headerTitle: string;
    keywords?: string;
    en_canonical?: string;
    es_canonical?: string;
    image?: {
        fileName: string;
        alt: string;
    };
    noIndex?: boolean;
};
declare const NewHead: ({ title, description, headerTitle, keywords, en_canonical, es_canonical, image, noIndex, }: HeadProps) => import("react/jsx-runtime").JSX.Element;
export default NewHead;
//# sourceMappingURL=Head.d.ts.map