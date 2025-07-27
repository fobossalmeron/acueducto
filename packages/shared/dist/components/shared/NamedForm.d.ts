type FormProps = {
    text: {
        firstName: {
            label: string;
            placeholder: string;
            errorMissing: string;
        };
        lastName: {
            label: string;
            placeholder: string;
            errorMissing: string;
        };
        email: {
            label: string;
            placeholder: string;
            errorMissing: string;
            errorInvalid: string;
        };
        loading: string;
        submit: string;
    };
    onSubmit: (data: object) => void;
    formMarkup?: React.ReactNode;
    successMarkup?: React.ReactNode;
    id: string;
    infinite?: boolean;
};
declare const NamedForm: ({ text, onSubmit, formMarkup, successMarkup, id, infinite, }: FormProps) => import("react/jsx-runtime").JSX.Element;
export default NamedForm;
//# sourceMappingURL=NamedForm.d.ts.map