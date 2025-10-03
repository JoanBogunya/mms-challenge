import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../config/theme';
import IssueComments from './IssueComments';
import { describe, expect, it } from 'vitest';

describe('IssueComments', () => {
    it('renders no comments message', () => {
        render(
            <ThemeProvider theme={theme}>
                <IssueComments
                    comments={{
                        nodes: [],
                        pageInfo: {
                            hasNextPage: false,
                            endCursor: null
                        }
                    }}
                    fetchMoreComments={async () => { }}
                    isFetching={false}
                    errorLoading={null}
                />
            </ThemeProvider>
        );
        expect(screen.getByText(/any comments yet/i)).toBeInTheDocument();
    });

    it('renders comments', () => {
        render(
            <ThemeProvider theme={theme}>
                <IssueComments
                    fetchMoreComments={async () => { }}
                    isFetching={false}
                    errorLoading={null}
                    comments={{
                        nodes: [
                            { author: { login: 'user1' }, body: 'Test comment', createdAt: '2025-01-01T00:00:00Z' }
                        ],
                        pageInfo: { hasNextPage: false, endCursor: null }
                    }}
                />
            </ThemeProvider>
        );
        expect(screen.getByText('Test comment')).toBeInTheDocument();
        expect(screen.getByText('user1')).toBeInTheDocument();
    });
});