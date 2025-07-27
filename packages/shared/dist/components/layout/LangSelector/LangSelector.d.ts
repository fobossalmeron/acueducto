import type { Dispatch, SetStateAction } from 'react';
interface LangSelectorProps {
    isContentVisible: boolean;
    setIsContentVisible: Dispatch<SetStateAction<boolean>>;
    onLanguageChangeStart?: () => void;
}
declare function LangSelector({ isContentVisible, setIsContentVisible, onLanguageChangeStart, }: LangSelectorProps): import("react/jsx-runtime").JSX.Element;
export default LangSelector;
//# sourceMappingURL=LangSelector.d.ts.map