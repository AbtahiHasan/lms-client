"use clinet"

import { ThemeProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

const themeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <ThemeProvider {...props}>
            {children}
        </ThemeProvider>
    );
};

export default themeProvider;