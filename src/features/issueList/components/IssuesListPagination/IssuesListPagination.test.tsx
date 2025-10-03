import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../config/theme';
import IssuesListPagination from './IssuesListPagination';
import { describe, expect, it, vi } from 'vitest';

describe('IssuesListPagination', () => {
    it('renders and handles next/prev', () => {
        const onNext = vi.fn();
        const onPrev = vi.fn();
        render(
            <ThemeProvider theme={theme}>
                <IssuesListPagination
                    goToNextPage={onNext}
                    goToPreviousPage={onPrev}
                    hasNextPage={true}
                    hasPreviousPage={true}
                />
            </ThemeProvider>
        );
        fireEvent.click(screen.getByRole('button', { name: /next/i }));
        fireEvent.click(screen.getByRole('button', { name: /prev/i }));
        expect(onNext).toHaveBeenCalled();
        expect(onPrev).toHaveBeenCalled();
    });
});