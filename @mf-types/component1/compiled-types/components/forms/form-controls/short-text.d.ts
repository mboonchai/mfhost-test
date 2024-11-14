interface IBaseField {
    id?: string;
    name?: string;
    label?: string;
    alignment?: string;
    placeholder?: string;
    subLabel?: string;
    className?: string;
    isRequired?: boolean;
    disabled?: boolean;
    error?: string;
    onChange?: (value: any) => void;
}
interface IShortText extends IBaseField {
    defaultValue?: string;
    type?: string;
    minLength?: number;
    maxLength?: number;
}
declare const _default: ({ id, label, placeholder, className, type, alignment, defaultValue, isRequired, subLabel, minLength, maxLength, disabled, error, onChange }: IShortText) => import("react/jsx-runtime").JSX.Element;
export default _default;
