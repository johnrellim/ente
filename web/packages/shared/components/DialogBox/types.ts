import type { ButtonProps } from "@mui/material";

export interface DialogBoxAttributes {
    icon?: React.ReactNode;
    title?: string;
    /**
     * Set this to `true` to prevent the dialog from being closed when the user
     * clicks the backdrop outside the dialog.
     */
    staticBackdrop?: boolean;
    nonClosable?: boolean;
    content?: any;
    close?: {
        text?: string;
        variant?: ButtonProps["color"];
        action?: () => void;
    };
    proceed?: {
        text: string;
        action: () => void;
        variant?: ButtonProps["color"];
        disabled?: boolean;
        /**
         * If `true`, then the button representing the proceed action is focused
         * when the dialog is opened. This allows the user to directly press
         * ENTER to complete that action.
         */
        autoFocus?: boolean;
    };
    secondary?: {
        text: string;
        action: () => void;
        variant: ButtonProps["color"];
        disabled?: boolean;
    };
}
