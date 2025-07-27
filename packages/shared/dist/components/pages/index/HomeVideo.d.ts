import React from 'react';
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'shader-doodle': any;
        }
    }
}
declare const HomeVideo: () => React.JSX.Element;
declare global {
    interface Window {
        clearAnimationFrame?: (id: number) => void;
    }
}
export default HomeVideo;
//# sourceMappingURL=HomeVideo.d.ts.map