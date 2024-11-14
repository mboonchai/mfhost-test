import React from 'react';
interface FormContext {
    errors: (elementid: string) => any;
    onChange: (elementid: string) => (value: any) => void;
}
interface FormProps {
    refCode: string;
    form: any;
    children: (props: FormContext) => React.ReactNode;
    onSubmitError?: (error: any) => void;
    onSubmitSuccess?: (data: any) => void;
    setLoading?: (loading: boolean) => void;
    exchangeToken?: any;
    duration?: any;
    useI18n?: any;
    config?: any;
    fnFormSubmit?: any;
}
declare const _default: (props: FormProps) => import("react/jsx-runtime").JSX.Element;
export default _default;
