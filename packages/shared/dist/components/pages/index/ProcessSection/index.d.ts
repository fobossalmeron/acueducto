import React from 'react';
interface ProcessSectionProps {
    title: string;
    labelFirst: string;
    labelSecond: string;
    stages: {
        p: string;
        badge: string;
        title: string;
    }[];
    agileCard: {
        auxiliary: string;
        title: string;
        p: string;
        button: string;
    };
}
export declare const ProcessSection: React.FC<ProcessSectionProps>;
export {};
//# sourceMappingURL=index.d.ts.map