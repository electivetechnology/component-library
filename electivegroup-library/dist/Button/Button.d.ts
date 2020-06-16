import { FunctionComponent } from 'react';
declare type Props = {
    text: string;
    theme: string;
    disabled?: boolean;
    onClick?: any;
    fullWidth?: boolean;
    width?: number;
    icon?: any;
    href?: string;
    hasChildren?: boolean;
    btnWidth?: string;
    borderRadius?: string;
    textTransform?: any;
};
declare const Button: FunctionComponent<Props>;
export default Button;
