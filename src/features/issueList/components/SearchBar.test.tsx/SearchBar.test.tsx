import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../config/theme';
import SearchBar from './SearchBar';
import { describe, expect, it } from 'vitest';

describe('SearchBar', () => {
    it('renders properly', () => {
        render(
            <ThemeProvider theme={theme}>
                <SearchBar value="" onSearch={() => { }} />
            </ThemeProvider>
        );
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});