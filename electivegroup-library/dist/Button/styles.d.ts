export declare const primaryStyles: {
    backgroundColor: string;
    color: string;
    '&:hover': {
        backgroundColor: string;
    };
};
export declare const secondaryStyles: {
    backgroundColor: string;
    color: string;
};
export declare const betaStyles: {
    backgroundColor: string;
    color: string;
    boxShadow: string;
    '&:hover': {
        backgroundColor: string;
        color: string;
    };
};
export declare const useStyles: (props?: any) => Record<"component", string>;
declare type WrapperProps = {
    icon?: any;
    hasChildren?: boolean;
};
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, WrapperProps, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
