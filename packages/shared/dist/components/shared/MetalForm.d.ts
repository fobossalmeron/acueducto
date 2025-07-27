type MetalFormProps = {
    text: {
        email: {
            placeholder: string;
            errorMissing: string;
            errorInvalid: string;
        };
        loading: string;
        submit: string;
        success: string;
    };
    onSubmit: (data: {
        email: string;
    }) => void;
    id: string;
};
declare const MetalForm: ({ text, onSubmit, id }: MetalFormProps) => import("react/jsx-runtime").JSX.Element;
export default MetalForm;
//# sourceMappingURL=MetalForm.d.ts.map