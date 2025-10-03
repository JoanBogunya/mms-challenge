import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../config/theme';
import IssuesList from './IssuesList';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('IssuesList', () => {
    it('renders no issues message', () => {
        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <IssuesList issues={[]} />
                </BrowserRouter>
            </ThemeProvider>
        );
        expect(screen.getByText(/no issues/i)).toBeInTheDocument();
    });

    it('renders issue titles', () => {
        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <IssuesList
                        issues={[
                            { number: 1, title: 'Issue 1', body: 'Body 1', state: 'OPEN', createdAt: '', author: { login: 'user' }, labels: { nodes: [] } }
                        ]}
                    />
                </BrowserRouter>
            </ThemeProvider>
        );
        expect(screen.getByText('Issue 1')).toBeInTheDocument();
    });
});