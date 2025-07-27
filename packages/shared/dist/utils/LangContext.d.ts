import React from "react";
export type SharedTProps = {
    nav: Array<{
        title: string;
        link: string;
        as?: string;
    }>;
    legal_nav: {
        cookies: {
            title: string;
            link: string;
        };
        privacy: {
            title: string;
            link: string;
            as?: string;
        };
    };
    lang: string;
    casestudies: {
        cases: Array<{
            title: string;
            tags: string;
            link: string;
            bg_format?: string;
        }>;
    };
    contact_footer: {
        title: string;
        p: string;
        button_text: string;
        footer_nav: {
            navTitles: {
                main: string;
                community: string;
                policies: string;
                resources?: string;
            };
            main: Array<{
                title: string;
                link: string;
                as?: string;
            }>;
            policies: Array<{
                title: string;
                link: string;
                as?: string;
            }>;
            mailto: {
                subject: string;
                body: string;
            };
        };
    };
    cookie_message: {
        title: string;
        p: string;
        link: string;
        p_continued: string;
    };
    next_study: {
        p: string;
    };
    error_page: {
        headerTitle: string;
        meta_description: string;
        intro: {
            title: string;
            p: string;
        };
    };
    resources: {
        p: string;
        articles: string;
    };
};
declare const LangContext: React.Context<SharedTProps>;
export declare function useLocaleContext(): SharedTProps;
export declare const LangProvider: React.Provider<SharedTProps>;
export declare const LangConsumer: React.Consumer<SharedTProps>;
export default LangContext;
//# sourceMappingURL=LangContext.d.ts.map