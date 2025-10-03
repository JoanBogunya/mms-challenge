import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../config/theme';
import IssueDetail from './IssueDetail';
import { describe, expect, it } from 'vitest';
import type { IssueDetails } from '../../hooks/useGetIssueDetails';
import { BrowserRouter } from 'react-router-dom';

describe('IssueDetail', () => {
    it('renders issue title and body', () => {
        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <IssueDetail
                        issue={{ title: 'Test Issue', body: 'Issue body', state: 'OPEN', author: { login: 'author1' }, labels: { nodes: [{ name: 'bug' }] } } as IssueDetails}
                        number={1}
                    />
                </BrowserRouter>
            </ThemeProvider>
        );
        expect(screen.getByText('Test Issue')).toBeInTheDocument();
        expect(screen.getByText('Issue body')).toBeInTheDocument();
        expect(screen.getByText('Authored by author1')).toBeInTheDocument();
        expect(screen.getByText('bug')).toBeInTheDocument();
    });
});
