import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: {
                main: string;
                light: string;
                dark: string;
            };
            secondary: {
                main: string;
                light: string;
                dark: string;
            };
            white: string;
            black: string;
            border: string;
        };
        borderRadius: string;
    }
}