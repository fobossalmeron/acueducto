import React from "react";
interface NavProps {
    nav: Array<{
        link: string;
        as?: string;
        title: string;
    }>;
    isOpen: boolean;
    closeNav: () => void;
    locale: string;
}
declare const _default: React.NamedExoticComponent<NavProps>;
export default _default;
//# sourceMappingURL=Nav.d.ts.map